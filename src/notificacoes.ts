import { INotificacao } from './contracts/i-notificacao';

export const notificacoes: Map<string, INotificacao> = new Map();

notificacoes.set('naoIntegrado', {
  codigo   : 'naoIntegrado',
  categoria: 'aviso',
  descricao: 'Alert not integrated.',
});

notificacoes.set('antenaGpsDesconectada', {
  codigo   : 'antenaGpsDesconectada',
  categoria: 'aviso',
  descricao: 'Antena GPS desconectada.',
});

notificacoes.set('antenaGpsReconectada', {
  codigo   : 'antenaGpsReconectada',
  categoria: 'aviso',
  descricao: 'Antena GPS foi reconectada.',
});

notificacoes.set('antenaGpsEmCurto', {
  codigo   : 'antenaGpsEmCurto',
  categoria: 'aviso',
  descricao: 'Antena GPS em curto.',
});

notificacoes.set('antiTheft', {
  codigo   : 'antiTheft',
  categoria: 'emergencia',
  descricao: 'Emergency by anti-theft.',
});

notificacoes.set('bateriaBackupComErro', {
  codigo   : 'bateriaBackupComErro',
  categoria: 'aviso',
  descricao: 'Backup battery error.',
});

notificacoes.set('bateriaBackupDesconectada', {
  codigo   : 'bateriaBackupDesconectada',
  categoria: 'aviso',
  descricao: 'Rastreador desconectado da bateria de backup.',
});

notificacoes.set('bateriaBackupConectada', {
  codigo   : 'bateriaBackupConectada',
  categoria: 'aviso',
  descricao: 'Rastreador conectado a bateria de backup.',
});

notificacoes.set('bateriaVeiculoBaixa', {
  codigo   : 'bateriaVeiculoBaixa',
  categoria: 'aviso',
  descricao: 'A bateria do veículo está baixa, o rastreador irá hibernar.',
});

notificacoes.set('bateriaInternaBaixa', {
  codigo   : 'bateriaInternaBaixa',
  categoria: 'emergencia',
  descricao: 'A bateria do rastreador está baixa, o rastreador será desligado.',
});

notificacoes.set('bateriaInternaBaixa', {
  codigo   : 'bateriaInternaBaixa',
  categoria: 'emergencia',
  descricao: 'A bateria do rastreador está baixa, o rastreador será desligado.',
});

notificacoes.set('botaoPanicoLigado', {
  codigo   : 'botaoPanicoLigado',
  categoria: 'emergencia',
  descricao: 'Botão de pânico pressionado.',
});

notificacoes.set('botaoPanicoLigado', {
  codigo   : 'botaoPanicoLigado',
  categoria: 'emergencia',
  descricao: 'Botão de pânico pressionado.',
});

notificacoes.set('colisaoVeiculo', {
  codigo   : 'colisaoVeiculo',
  categoria: 'aviso',
  descricao: 'Ocorreu uma colisão com o veículo.',
});

notificacoes.set('fonteDeEnergiaPrincipalConectada', {
  codigo   : 'fonteDeEnergiaPrincipalConectada',
  categoria: 'aviso',
  descricao: 'Conectado à fonte de alimentação principal.',
});

notificacoes.set('fonteDeEnergiaPrincipalDesconectada', {
  codigo   : 'fonteDeEnergiaPrincipalDesconectada',
  categoria: 'emergencia',
  descricao: 'Desconectado da fonte de alimentação principal.',
});

notificacoes.set('ignicaoDesligada', {
  codigo   : 'ignicaoDesligada',
  categoria: 'aviso',
  descricao: 'Ignição desligada.',
});

notificacoes.set('ignicaoLigada', {
  codigo   : 'ignicaoLigada',
  categoria: 'aviso',
  descricao: 'Ignição ligada.',
});

notificacoes.set('jammingDetectado', {
  codigo   : 'jammingDetectado',
  categoria: 'emergencia',
  descricao: 'Jamming detectado.',
});

notificacoes.set('movimento', {
  codigo   : 'movimento',
  categoria: 'emergencia',
  descricao: 'O rastreador está em movimento.',
});

notificacoes.set('sleepModeEnter', {
  codigo   : 'sleepModeEnter',
  categoria: 'aviso',
  descricao: 'Enter the Deep Sleep Mode.',
});

notificacoes.set('sleepModeExit', {
  codigo   : 'sleepModeExit',
  categoria: 'aviso',
  descricao: 'Exit from the Deep Sleep Mode.',
});
