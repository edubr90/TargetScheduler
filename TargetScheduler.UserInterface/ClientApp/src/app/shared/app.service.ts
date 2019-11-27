import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { ComAgendamento } from './com-agendamento';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {
    readonly rootAddress = "http://localhost:5000/api/agendamento"

    constructor(private _http: HttpClient) { }

    // Http Headers
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    normalizarTimeZone(){
        Date.prototype.toJSON = function () {
            const hoursDiff = this.getHours() - this.getTimezoneOffset() / 60;
            this.setHours(hoursDiff);
            return this.toISOString();
        };
    }
    

    getAll(): Observable<ComAgendamento[]> {
        return this._http.get<ComAgendamento[]>(this.rootAddress + "/GetAll");
    }

    getPorNome(textoBusca: string): Observable<ComAgendamento[]> {
        return this._http.get<ComAgendamento[]>(this.rootAddress + "/GetPorNome/" + textoBusca);
    }

    getAgendamento(id: number): Observable<ComAgendamento> {
        return this._http.get<ComAgendamento>(this.rootAddress + "/Get/" + id);
    }

    postAgendamento(agenda: ComAgendamento) {
        this.normalizarTimeZone();
        return this._http.post<ComAgendamento>(this.rootAddress, JSON.stringify(agenda), this.httpOptions);
    }

    putAgendamento(agenda: ComAgendamento) {
        this.normalizarTimeZone();
        return this._http.put(this.rootAddress, JSON.stringify(agenda), this.httpOptions);
    }

    deleteAgendamento(id: number) {
        return this._http.delete(this.rootAddress + "/Delete/" + id, this.httpOptions);
    }


}
