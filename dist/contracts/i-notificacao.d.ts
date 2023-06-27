type categoria = 'aviso' | 'emergencia';
export interface INotificacao {
    titulo: string;
    descricao: string;
    codigo: string;
    categoria: categoria;
}
export {};
