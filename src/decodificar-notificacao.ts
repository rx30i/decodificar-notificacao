import { INotificacao } from './contracts/i-notificacao';
import { notificacoes } from './notificacoes';

export class DecodificarNotificacao {
  public decodificar (codigoNotificacao: string): INotificacao {
    if (notificacoes.has(codigoNotificacao)) {
      return notificacoes.get(codigoNotificacao);
    }

    return notificacoes.get('naoIntegrado');
  }
}
