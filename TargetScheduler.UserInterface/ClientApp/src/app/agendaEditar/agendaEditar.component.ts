import { Component, OnInit, Renderer } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ComAgendamento } from '../shared/com-agendamento';
import { TipoAgenda } from '../shared/tipo-agenda.enum'
import { AppService } from '../shared/app.service';
import { ComPessoa } from '../shared/com-pessoa';

import { MessageHelpers } from '../shared/message-helpers';
import { DateTimeAdapter } from 'ng-pick-datetime';


@Component({
  selector: 'app-agendaeditar',
  templateUrl: './agendaEditar.component.html',
    styleUrls: ['./agendaEditar.component.css'],
    providers: [MessageHelpers],
})
export class AgendaEditarComponent implements OnInit {
    tipoagenda = new Map([[TipoAgenda.Novo, 'Novo'], [TipoAgenda.Retorno, 'Retorno']]);
    agenda: ComAgendamento;
    formularioAgenda: FormGroup;
    title: string = "Criar novo";

    constructor(
        private _formBuilder: FormBuilder,
        private _activatedRoute: ActivatedRoute,
        private _appService: AppService,
        private _router: Router,
        private _messageHelpers: MessageHelpers,
        private _dateTimeAdapter: DateTimeAdapter<any>,
        private _renderer: Renderer

    ) {
        this._dateTimeAdapter.setLocale('pt-BR');
        //Inicializando...
        this.agenda = new ComAgendamento();
        this.agenda.pessoa = new ComPessoa();


        if (this._activatedRoute.snapshot.params["id"]) {
            this.agenda.id = this._activatedRoute.snapshot.params["id"];
        }

        this.formularioAgenda = this._formBuilder.group({
            Id: this.agenda.id,
            Nome: [this.agenda.nome, [Validators.required]],
            Responsavel: [this.agenda.pessoa.nome, [Validators.required]],
            DataNascimento: [this.agenda.pessoa.dataNascimento, [Validators.required]],
            Inicio: [this.agenda.inicio, [Validators.required]],
            Termino: [this.agenda.termino, [Validators.required]],
            Tipo: [this.agenda.tipo, [Validators.required]],
            Observacao: this.agenda.observacao

        });
    }

    ngOnInit() {
        if (this.agenda.id > 0) {
            this.title = "Editar";
            this._appService.getAgendamento(this.agenda.id)
                .subscribe(resp => {
                    this.agenda = resp;
                });
        }
    }

    get f() { return this.formularioAgenda.controls; }

    acionarCalendar(): void {
        this._renderer.invokeElementMethod(document.activeElement, 'click');
    }

    salvarAgendamento() {

        if (this.agenda.pessoa.dataNascimento > new Date()) {
            alert("Não é possível cadastrar uma data futura para o campo Data de Nascimento.");
            return;
        }

        if (!this.formularioAgenda.valid) {
            alert("Favor corrigir os erros de validação para continuar.");
            return;
        }

        if (this.agenda.inicio > this.agenda.termino) {
            alert("A Data de Início não pode ser maior do que a Data de Término.")
            return;
        }

        if (this.agenda.id > 0) {
            this._appService.putAgendamento(this.agenda)
                .subscribe((data) => {
                    alert("Atualização realizada com sucesso");
                    this._router.navigate(["/agenda"]);
                }, error =>
                {
                        console.log(error);
                        alert(this._messageHelpers.amigaficarMensagemdeErro(error.message));
                });
        }
        else {
            this._appService.postAgendamento(this.agenda)
                .subscribe((data) => {
                    alert("Cadastro realizado com sucesso");
                    this._router.navigate(["/agenda"]);
                }, error => {
                        console.log(error);
                        alert(this._messageHelpers.amigaficarMensagemdeErro(error.message));
                });
        }
    }

    cancelar() {
        this._router.navigate(["/agenda"]);
    }

}
