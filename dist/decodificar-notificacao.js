"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecodificarNotificacao = void 0;
const notificacoes_1 = require("./notificacoes");
class DecodificarNotificacao {
    decodificar(codigoNotificacao) {
        if (notificacoes_1.notificacoes.has(codigoNotificacao)) {
            return notificacoes_1.notificacoes.get(codigoNotificacao);
        }
        return notificacoes_1.notificacoes.get('naoIntegrado');
    }
}
exports.DecodificarNotificacao = DecodificarNotificacao;
//# sourceMappingURL=decodificar-notificacao.js.map