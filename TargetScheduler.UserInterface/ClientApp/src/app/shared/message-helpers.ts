export class MessageHelpers {
    constructor() { }
    amigaficarMensagemdeErro(msgoriginal: string): string {
        return "Ocorreram erros ao processar a sua requisição: " + msgoriginal;
    }
}
