import { INotificacao } from './contracts/i-notificacao';

export const notificacoes: Map<string, INotificacao> = new Map();

notificacoes.set('naoIntegrado', {
  titulo   : 'Alerta não integrado.',
  descricao: 'Alerta não integrado.',
  codigo   : 'naoIntegrado',
  categoria: 'aviso',
});

notificacoes.set('antenaGpsDesconectada', {
  titulo   : 'Antena GPS foi desconectada.',
  codigo   : 'antenaGpsDesconectada',
  categoria: 'aviso',
  descricao: 'Antena GPS foi desconectada.',
});

notificacoes.set('antenaGpsReconectada', {
  titulo   : 'Antena GPS foi reconectada',
  codigo   : 'antenaGpsReconectada',
  categoria: 'aviso',
  descricao: 'Antena GPS foi reconectada.',
});

notificacoes.set('antenaGpsEmCurto', {
  titulo   : 'Antena GPS em curto.',
  codigo   : 'antenaGpsEmCurto',
  categoria: 'aviso',
  descricao: 'Antena GPS em curto.',
});

notificacoes.set('antiTheft', {
  titulo   : 'Emergency by anti-theft.',
  codigo   : 'antiTheft',
  categoria: 'emergencia',
  descricao: 'Emergency by anti-theft.',
});

notificacoes.set('bateriaBackupComErro', {
  titulo   : 'Bateria do rastreador com erro.',
  codigo   : 'bateriaBackupComErro',
  categoria: 'aviso',
  descricao: 'Backup battery error.',
});

notificacoes.set('bateriaBackupDesconectada', {
  titulo   : 'Rastreador desconectado da sua bateria interna.',
  codigo   : 'bateriaBackupDesconectada',
  categoria: 'aviso',
  descricao: 'Rastreador desconectado da bateria de backup.',
});

notificacoes.set('bateriaBackupConectada', {
  titulo   : 'Rastreador reconectado sua bateria interna.',
  codigo   : 'bateriaBackupConectada',
  categoria: 'aviso',
  descricao: 'Rastreador conectado a bateria de backup.',
});

notificacoes.set('bateriaVeiculoBaixa', {
  titulo   : 'A bateria do veículo está baixa, o rastreador irá hibernar.',
  codigo   : 'bateriaVeiculoBaixa',
  categoria: 'aviso',
  descricao: 'A bateria do veículo está baixa, o rastreador irá hibernar.',
});

notificacoes.set('bateriaInternaBaixa', {
  titulo   : 'A bateria do rastreador está baixa, o rastreador será desligado.',
  codigo   : 'bateriaInternaBaixa',
  categoria: 'emergencia',
  descricao: 'A bateria do rastreador está baixa, o rastreador será desligado.',
});

notificacoes.set('botaoPanicoLigado', {
  titulo   : 'Botão de pânico pressionado.',
  codigo   : 'botaoPanicoLigado',
  categoria: 'emergencia',
  descricao: 'Botão de pânico pressionado.',
});

notificacoes.set('colisaoVeiculo', {
  titulo   : 'Ocorreu uma colisão com o veículo.',
  codigo   : 'colisaoVeiculo',
  categoria: 'aviso',
  descricao: 'Ocorreu uma colisão com o veículo.',
});

notificacoes.set('fonteDeEnergiaPrincipalConectada', {
  titulo   : 'Conectado à fonte de alimentação principal.',
  codigo   : 'fonteDeEnergiaPrincipalConectada',
  categoria: 'aviso',
  descricao: 'Conectado à fonte de alimentação principal.',
});

notificacoes.set('fonteDeEnergiaPrincipalDesconectada', {
  titulo   : 'Desconectado da fonte de alimentação principal.',
  codigo   : 'fonteDeEnergiaPrincipalDesconectada',
  categoria: 'emergencia',
  descricao: 'Desconectado da fonte de alimentação principal.',
});

notificacoes.set('ignicaoDesligada', {
  titulo   : 'Ignição desligada.',
  codigo   : 'ignicaoDesligada',
  categoria: 'aviso',
  descricao: 'Ignição desligada.',
});

notificacoes.set('ignicaoLigada', {
  titulo   : 'Ignição ligada.',
  codigo   : 'ignicaoLigada',
  categoria: 'aviso',
  descricao: 'Ignição ligada.',
});

notificacoes.set('jammingDetectado', {
  titulo   : 'Jamming detectado.',
  codigo   : 'jammingDetectado',
  categoria: 'emergencia',
  descricao: 'Jamming detectado.',
});

notificacoes.set('movimento', {
  titulo   : 'O rastreador está em movimento.',
  codigo   : 'movimento',
  categoria: 'emergencia',
  descricao: 'O rastreador está em movimento.',
});

notificacoes.set('sleepModeEnter', {
  titulo   : 'Enter the Deep Sleep Mode.',
  codigo   : 'sleepModeEnter',
  categoria: 'aviso',
  descricao: 'Enter the Deep Sleep Mode.',
});

notificacoes.set('sleepModeExit', {
  titulo   : 'Exit from the Deep Sleep Mode.',
  codigo   : 'sleepModeExit',
  categoria: 'aviso',
  descricao: 'Exit from the Deep Sleep Mode.',
});
