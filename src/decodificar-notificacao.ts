import { CodigoNotificacao } from './codico-notificacao';
import { INotificacao } from './contracts/i-notificacao';
import { notificacoes } from './notificacoes';

export class DecodificarNotificacao {
  public static decodificar (codigoNotificacao: CodigoNotificacao): INotificacao {
    if (notificacoes.has(codigoNotificacao)) {
      return notificacoes.get(codigoNotificacao);
    }

    return notificacoes.get('naoIntegrado');
  }
}
