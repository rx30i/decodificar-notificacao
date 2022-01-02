"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificacoes = void 0;
exports.notificacoes = new Map();
exports.notificacoes.set('naoIntegrado', {
    codigo: 'naoIntegrado',
    categoria: 'aviso',
    descricao: 'Alert not integrated.',
});
exports.notificacoes.set('antenaGpsDesconectada', {
    codigo: 'antenaGpsDesconectada',
    categoria: 'aviso',
    descricao: 'Antena GPS desconectada.',
});
exports.notificacoes.set('antenaGpsReconectada', {
    codigo: 'antenaGpsReconectada',
    categoria: 'aviso',
    descricao: 'Antena GPS foi reconectada.',
});
exports.notificacoes.set('antenaGpsEmCurto', {
    codigo: 'antenaGpsEmCurto',
    categoria: 'aviso',
    descricao: 'Antena GPS em curto.',
});
exports.notificacoes.set('antiTheft', {
    codigo: 'antiTheft',
    categoria: 'emergencia',
    descricao: 'Emergency by anti-theft.',
});
exports.notificacoes.set('bateriaBackupComErro', {
    codigo: 'bateriaBackupComErro',
    categoria: 'aviso',
    descricao: 'Backup battery error.',
});
exports.notificacoes.set('bateriaBackupDesconectada', {
    codigo: 'bateriaBackupDesconectada',
    categoria: 'aviso',
    descricao: 'Rastreador desconectado da bateria de backup.',
});
exports.notificacoes.set('bateriaBackupConectada', {
    codigo: 'bateriaBackupConectada',
    categoria: 'aviso',
    descricao: 'Rastreador conectado a bateria de backup.',
});
exports.notificacoes.set('bateriaVeiculoBaixa', {
    codigo: 'bateriaVeiculoBaixa',
    categoria: 'aviso',
    descricao: 'A bateria do veículo está baixa, o rastreador irá hibernar.',
});
exports.notificacoes.set('bateriaInternaBaixa', {
    codigo: 'bateriaInternaBaixa',
    categoria: 'emergencia',
    descricao: 'A bateria do rastreador está baixa, o rastreador será desligado.',
});
exports.notificacoes.set('bateriaInternaBaixa', {
    codigo: 'bateriaInternaBaixa',
    categoria: 'emergencia',
    descricao: 'A bateria do rastreador está baixa, o rastreador será desligado.',
});
exports.notificacoes.set('botaoPanicoLigado', {
    codigo: 'botaoPanicoLigado',
    categoria: 'emergencia',
    descricao: 'Botão de pânico pressionado.',
});
exports.notificacoes.set('botaoPanicoLigado', {
    codigo: 'botaoPanicoLigado',
    categoria: 'emergencia',
    descricao: 'Botão de pânico pressionado.',
});
exports.notificacoes.set('colisaoVeiculo', {
    codigo: 'colisaoVeiculo',
    categoria: 'aviso',
    descricao: 'Ocorreu uma colisão com o veículo.',
});
exports.notificacoes.set('fonteDeEnergiaPrincipalConectada', {
    codigo: 'fonteDeEnergiaPrincipalConectada',
    categoria: 'aviso',
    descricao: 'Conectado à fonte de alimentação principal.',
});
exports.notificacoes.set('fonteDeEnergiaPrincipalDesconectada', {
    codigo: 'fonteDeEnergiaPrincipalDesconectada',
    categoria: 'emergencia',
    descricao: 'Desconectado da fonte de alimentação principal.',
});
exports.notificacoes.set('ignicaoDesligada', {
    codigo: 'ignicaoDesligada',
    categoria: 'aviso',
    descricao: 'Ignição desligada.',
});
exports.notificacoes.set('ignicaoLigada', {
    codigo: 'ignicaoLigada',
    categoria: 'aviso',
    descricao: 'Ignição ligada.',
});
exports.notificacoes.set('jammingDetectado', {
    codigo: 'jammingDetectado',
    categoria: 'emergencia',
    descricao: 'Jamming detectado.',
});
exports.notificacoes.set('movimento', {
    codigo: 'movimento',
    categoria: 'emergencia',
    descricao: 'O rastreador está em movimento.',
});
exports.notificacoes.set('sleepModeEnter', {
    codigo: 'sleepModeEnter',
    categoria: 'aviso',
    descricao: 'Enter the Deep Sleep Mode.',
});
exports.notificacoes.set('sleepModeExit', {
    codigo: 'sleepModeExit',
    categoria: 'aviso',
    descricao: 'Exit from the Deep Sleep Mode.',
});
//# sourceMappingURL=notificacoes.js.map