type categoria = 'aviso' | 'emergencia';

export interface INotificacao {
  codigo: string;
  categoria: categoria;
  descricao: string;
}
