import { CodigoNotificacao } from './codico-notificacao';
import { INotificacao } from './contracts/i-notificacao';
export declare class DecodificarNotificacao {
    static decodificar(codigoNotificacao: CodigoNotificacao): INotificacao;
}
