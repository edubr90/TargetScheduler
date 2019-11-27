import { ComPessoa } from './com-pessoa';
import { TipoAgenda } from './tipo-agenda.enum';

export class ComAgendamento {
    id: number;
    nome: string;
    pessoaid: number;
    pessoa: ComPessoa;
    inicio: Date;
    termino: Date;
    tipo: TipoAgenda;
    observacao: string;
}
