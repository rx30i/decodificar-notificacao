"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificacoes = void 0;
exports.notificacoes = new Map();
exports.notificacoes.set('naoIntegrado', {
    titulo: 'Alerta não integrado.',
    descricao: 'Alerta não integrado.',
    codigo: 'naoIntegrado',
    categoria: 'aviso',
});
exports.notificacoes.set('antenaGpsDesconectada', {
    titulo: 'Antena GPS foi desconectada.',
    codigo: 'antenaGpsDesconectada',
    categoria: 'aviso',
    descricao: 'Antena GPS foi desconectada.',
});
exports.notificacoes.set('antenaGpsReconectada', {
    titulo: 'Antena GPS foi reconectada',
    codigo: 'antenaGpsReconectada',
    categoria: 'aviso',
    descricao: 'Antena GPS foi reconectada.',
});
exports.notificacoes.set('antenaGpsEmCurto', {
    titulo: 'Antena GPS em curto.',
    codigo: 'antenaGpsEmCurto',
    categoria: 'aviso',
    descricao: 'Antena GPS em curto.',
});
exports.notificacoes.set('antiTheft', {
    titulo: 'Emergency by anti-theft.',
    codigo: 'antiTheft',
    categoria: 'emergencia',
    descricao: 'Emergency by anti-theft.',
});
exports.notificacoes.set('bateriaBackupComErro', {
    titulo: 'Bateria do rastreador com erro.',
    codigo: 'bateriaBackupComErro',
    categoria: 'aviso',
    descricao: 'Backup battery error.',
});
exports.notificacoes.set('bateriaBackupDesconectada', {
    titulo: 'Rastreador desconectado da sua bateria interna.',
    codigo: 'bateriaBackupDesconectada',
    categoria: 'aviso',
    descricao: 'Rastreador desconectado da bateria de backup.',
});
exports.notificacoes.set('bateriaBackupConectada', {
    titulo: 'Rastreador reconectado sua bateria interna.',
    codigo: 'bateriaBackupConectada',
    categoria: 'aviso',
    descricao: 'Rastreador conectado a bateria de backup.',
});
exports.notificacoes.set('bateriaVeiculoBaixa', {
    titulo: 'A bateria do veículo está baixa, o rastreador irá hibernar.',
    codigo: 'bateriaVeiculoBaixa',
    categoria: 'aviso',
    descricao: 'A bateria do veículo está baixa, o rastreador irá hibernar.',
});
exports.notificacoes.set('bateriaInternaBaixa', {
    titulo: 'A bateria do rastreador está baixa, o rastreador será desligado.',
    codigo: 'bateriaInternaBaixa',
    categoria: 'emergencia',
    descricao: 'A bateria do rastreador está baixa, o rastreador será desligado.',
});
exports.notificacoes.set('botaoPanicoLigado', {
    titulo: 'Botão de pânico pressionado.',
    codigo: 'botaoPanicoLigado',
    categoria: 'emergencia',
    descricao: 'Botão de pânico pressionado.',
});
exports.notificacoes.set('colisaoVeiculo', {
    titulo: 'Ocorreu uma colisão com o veículo.',
    codigo: 'colisaoVeiculo',
    categoria: 'aviso',
    descricao: 'Ocorreu uma colisão com o veículo.',
});
exports.notificacoes.set('fonteDeEnergiaPrincipalConectada', {
    titulo: 'Conectado à fonte de alimentação principal.',
    codigo: 'fonteDeEnergiaPrincipalConectada',
    categoria: 'aviso',
    descricao: 'Conectado à fonte de alimentação principal.',
});
exports.notificacoes.set('fonteDeEnergiaPrincipalDesconectada', {
    titulo: 'Desconectado da fonte de alimentação principal.',
    codigo: 'fonteDeEnergiaPrincipalDesconectada',
    categoria: 'emergencia',
    descricao: 'Desconectado da fonte de alimentação principal.',
});
exports.notificacoes.set('ignicaoDesligada', {
    titulo: 'Ignição desligada.',
    codigo: 'ignicaoDesligada',
    categoria: 'aviso',
    descricao: 'Ignição desligada.',
});
exports.notificacoes.set('ignicaoLigada', {
    titulo: 'Ignição ligada.',
    codigo: 'ignicaoLigada',
    categoria: 'aviso',
    descricao: 'Ignição ligada.',
});
exports.notificacoes.set('jammingDetectado', {
    titulo: 'Jamming detectado.',
    codigo: 'jammingDetectado',
    categoria: 'emergencia',
    descricao: 'Jamming detectado.',
});
exports.notificacoes.set('movimento', {
    titulo: 'O rastreador está em movimento.',
    codigo: 'movimento',
    categoria: 'emergencia',
    descricao: 'O rastreador está em movimento.',
});
exports.notificacoes.set('sleepModeEnter', {
    titulo: 'Enter the Deep Sleep Mode.',
    codigo: 'sleepModeEnter',
    categoria: 'aviso',
    descricao: 'Enter the Deep Sleep Mode.',
});
exports.notificacoes.set('sleepModeExit', {
    titulo: 'Exit from the Deep Sleep Mode.',
    codigo: 'sleepModeExit',
    categoria: 'aviso',
    descricao: 'Exit from the Deep Sleep Mode.',
});
//# sourceMappingURL=notificacoes.js.map