import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ComAgendamento } from '../shared/com-agendamento';
import { AppService } from '../shared/app.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
    styleUrls: ['./agenda.component.css'],
})
export class AgendaComponent implements OnInit {

    public model: ComAgendamento[];
    termoBusca: string;

    constructor(private _router: Router, private _appService: AppService) { }

    ngOnInit() {
        this.getAgendamentos();
  }

    getAgendamentos() {
        this._appService.getAll().subscribe((data) => {
            if (data.length) {
                this.model = data;
            }
            else {
                this.model = undefined;
            }
        });
    }

    getPesquisa() {
        if (this.termoBusca == "" || this.termoBusca == undefined) {
            this.getAgendamentos();
            return false;
        }

        this._appService.getPorNome(this.termoBusca).subscribe((data) => {
            if (data.length) {
                this.model = data;
            }
            else {
                alert("Não foram encontrados resultados com base nos termos " + this.termoBusca);
                this.getAgendamentos();
            }
        });

        this.termoBusca = "";
    }

    delete(id) {
        var confirma = confirm("Você realmente deseja apagar o agendamento com ID " + id + " ?");
        if (confirma) {
            this._appService.deleteAgendamento(id).subscribe((data) => {
                if (data) {
                    this.getAgendamentos();
                }
                
            }, error => alert("Ocorreram erros: " + error));
        }
    }

}
