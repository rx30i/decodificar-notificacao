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
    descricao: 'Essa notificação informa que o condutor não pressionou o botão antifurto dentro do tempo configurado.',
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
    descricao: 'Essa notificação informa que o rastreador foi desconectado da bateria de backup, o rastreador tem uma bateria interna, uma bateria própria, essa é a bateria de backup.',
});
exports.notificacoes.set('bateriaBackupConectada', {
    titulo: 'Rastreador reconectado sua bateria interna.',
    codigo: 'bateriaBackupConectada',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que o rastreador foi conectado a bateria de backup, o rastreador tem uma bateria interna, uma bateria própria, essa é a bateria de backup..',
});
exports.notificacoes.set('bateriaVeiculoBaixa', {
    titulo: 'A bateria do veículo está baixa, o rastreador irá hibernar.',
    codigo: 'bateriaVeiculoBaixa',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que a bateria do veículo está baixa, o rastreador vai entrar no modo de sono profundo, vai hibernar.',
});
exports.notificacoes.set('bateriaInternaBaixa', {
    titulo: 'A bateria do rastreador está baixa, o rastreador será desligado.',
    codigo: 'bateriaInternaBaixa',
    categoria: 'emergencia',
    descricao: 'Essa notificação informa que a bateria do rastreador está baixa, o rastreador será desligado.',
});
exports.notificacoes.set('botaoPanicoLigado', {
    titulo: 'Botão de pânico pressionado.',
    codigo: 'botaoPanicoLigado',
    categoria: 'emergencia',
    descricao: 'Essa notificação informa que o botão de pânico foi pressionado. Esse botão de pânico é uma forma discreta e simples do condutor do veículo solicitar ajuda em casos de emergência.',
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
    descricao: 'Essa notificação informa que o rastreador foi reconectado à fonte de alimentação externa.',
});
exports.notificacoes.set('fonteDeEnergiaPrincipalDesconectada', {
    titulo: 'Desconectado da fonte de alimentação principal.',
    codigo: 'fonteDeEnergiaPrincipalDesconectada',
    categoria: 'emergencia',
    descricao: 'Essa notificação informa que o rastreador foi removido da fonte de alimentação externa. Se o rastreador está instalado em um veículo, o recebimento dessa notificação vai informa que o rastreador foi removido desse veículo.',
});
exports.notificacoes.set('ignicaoDesligada', {
    titulo: 'Ignição desligada.',
    codigo: 'ignicaoDesligada',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que a ignição do veículo foi desligada.',
});
exports.notificacoes.set('ignicaoLigada', {
    titulo: 'Ignição ligada.',
    codigo: 'ignicaoLigada',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que a ignição do veículo foi ligada.',
});
exports.notificacoes.set('jammingDetectado', {
    titulo: 'Jamming detectado.',
    codigo: 'jammingDetectado',
    categoria: 'emergencia',
    descricao: 'Essa notificação informa que o Jamming foi detectado, um bloqueador de sinal.',
});
exports.notificacoes.set('movimento', {
    titulo: 'O rastreador está em movimento.',
    codigo: 'movimento',
    categoria: 'emergencia',
    descricao: 'Essa notificação informa que o rastreador está em movimento.',
});
exports.notificacoes.set('sleepModeEnter', {
    titulo: 'O rastreador entrou no modo de sono profundo, hibernou.',
    codigo: 'sleepModeEnter',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que o rastreador entrou no modo de sono profundo, ele hibernou.',
});
exports.notificacoes.set('sleepModeExit', {
    titulo: 'O rastreador saiu no modo de sono profundo, acordou.',
    codigo: 'sleepModeExit',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que o rastreador saiu do modo de sono profundo, ele acordou.',
});
exports.notificacoes.set('shocked', {
    titulo: 'O rastreador está em movimento com a ignição desligada.',
    codigo: 'shocked',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que o rastreador está em movimento com a ignição desligada.',
});
exports.notificacoes.set('excedeuVelPermitida', {
    titulo: 'O rastreador ultrapassou a velocidade permitida.',
    codigo: 'excedeuVelPermitida',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que o rastreador ultrapassou a velocidade permitida.',
});
exports.notificacoes.set('voltouAVelPermitida', {
    titulo: 'O rastreador voltou a velocidade permitida.',
    codigo: 'voltouAVelPermitida',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que o rastreador voltou a velocidade permitida.',
});
exports.notificacoes.set('entrouCerca', {
    titulo: 'O rastreador entrou na cerca {NOME_CERCA}.',
    codigo: 'entrouCerca',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que o rastreador entrou na cerca.',
});
exports.notificacoes.set('saiuCerca', {
    titulo: 'O rastreador saiu da cerca {NOME_CERCA}.',
    codigo: 'saiuCerca',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que o rastreador saiu da cerca.',
});
exports.notificacoes.set('iButtonInserido', {
    titulo: 'Falta adicionar o texto para essa notificação.',
    codigo: 'iButtonInserido',
    categoria: 'aviso',
    descricao: 'Falta adicionar o texto para essa notificação.',
});
exports.notificacoes.set('iButtonRemovido', {
    titulo: 'Falta adicionar o texto para essa notificação.',
    codigo: 'iButtonRemovido',
    categoria: 'aviso',
    descricao: 'Falta adicionar o texto para essa notificação.',
});
exports.notificacoes.set('entrada1Ativa', {
    titulo: 'A entrada 1 do rastreador está ativa.',
    codigo: 'entrada1Ativa',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que a entrada 1 do rastreador está ativa.',
});
exports.notificacoes.set('entrada1Inativa', {
    titulo: 'A entrada 1 do rastreador está inativa.',
    codigo: 'entrada1Inativa',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que a entrada 1 do rastreador está inativa.',
});
exports.notificacoes.set('entrada2Ativa', {
    titulo: 'A entrada 2 do rastreador está ativa.',
    codigo: 'entrada2Ativa',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que a entrada 2 do rastreador está ativa.',
});
exports.notificacoes.set('entrada2Inativa', {
    titulo: 'A entrada 2 do rastreador está inativa.',
    codigo: 'entrada2Inativa',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que a entrada 2 do rastreador está inativa.',
});
exports.notificacoes.set('entrada3Ativa', {
    titulo: 'A entrada 3 do rastreador está ativa.',
    codigo: 'entrada3Ativa',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que a entrada 3 do rastreador está ativa.',
});
exports.notificacoes.set('entrada3Inativa', {
    titulo: 'A entrada 3 do rastreador está inativa.',
    codigo: 'entrada3Inativa',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que a entrada 3 do rastreador está inativa.',
});
//# sourceMappingURL=notificacoes.js.map