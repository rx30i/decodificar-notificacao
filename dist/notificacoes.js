"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificacoes = void 0;
exports.notificacoes = new Map();
exports.notificacoes.set('normal', {
    titulo: 'Nenhuma notificação emitida.',
    descricao: 'Nenhuma notificação emitida.',
    codigo: 'normal',
    categoria: 'aviso',
});
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
exports.notificacoes.set('gpsComProblema', {
    titulo: 'Problema com o GPS.',
    codigo: 'gpsComProblema',
    categoria: 'aviso',
    descricao: 'GPS não está funcionando corretamente no momento.',
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
    descricao: 'Essa notificação informa que o rastreador foi conectado a bateria de backup, o rastreador tem uma bateria interna, uma bateria própria, essa é a bateria de backup.',
});
exports.notificacoes.set('bateriaBackupRecarregada', {
    titulo: 'Bateria interna do rastreador recarregada.',
    codigo: 'bateriaBackupRecarregada',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que a bateria interna do rastreador foi recarregada.',
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
exports.notificacoes.set('ignicaoLigadaSis', {
    titulo: 'Ignição ligada.',
    codigo: 'ignicaoLigadaSis',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que a ignição do veículo foi ligada.',
});
exports.notificacoes.set('ignicaoDesligadaSis', {
    titulo: 'Ignição desligada.',
    codigo: 'ignicaoDesligadaSis',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que a ignição do veículo foi desligada.',
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
    descricao: 'Essa notificação informa que o rastreador não está no ponto de parada. Quando o rastreador ficar parado por um minuto ou mais a notificação é ativada, quando ele se mover 40 metros ou mais do ponto de parada uma notificação é enviada.',
});
exports.notificacoes.set('movimentoIgnicaoDesligada', {
    titulo: 'O rastreador está em movimento com a ignição desligada.',
    codigo: 'movimentoIgnicaoDesligada',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que o rastreador está em movimento com a ignição desligada.',
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
exports.notificacoes.set('saida1Ativa', {
    titulo: 'A saida 1 do rastreador está ativa.',
    codigo: 'saida1Ativa',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que a saida 1 do rastreador está ativa.',
});
exports.notificacoes.set('saida2Ativa', {
    titulo: 'A saida 2 do rastreador está ativa.',
    codigo: 'saida2Ativa',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que a saida 2 do rastreador está ativa.',
});
exports.notificacoes.set('saida3Ativa', {
    titulo: 'A saida 3 do rastreador está ativa.',
    codigo: 'saida3Ativa',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que a saida 3 do rastreador está ativa.',
});
exports.notificacoes.set('saida1Inativa', {
    titulo: 'A saida 1 do rastreador está inativa.',
    codigo: 'saida1Inativa',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que a saida 1 do rastreador está inativa.',
});
exports.notificacoes.set('saida2Inativa', {
    titulo: 'A saida 2 do rastreador está inativa.',
    codigo: 'saida2Inativa',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que a saida 2 do rastreador está inativa.',
});
exports.notificacoes.set('saida3Inativa', {
    titulo: 'A saida 3 do rastreador está inativa.',
    codigo: 'saida3Inativa',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que a saida 3 do rastreador está inativa.',
});
exports.notificacoes.set('rastreadorDesligado', {
    titulo: 'Comando executado, o rastreador será desligado',
    codigo: 'entrada3Inativa',
    categoria: 'emergencia',
    descricao: 'Essa notificação informa que o rastreador será desligado devido ao comando recebido.',
});
exports.notificacoes.set('bloqueado', {
    titulo: 'Comando de bloqueio executado',
    codigo: 'bloqueado',
    categoria: 'emergencia',
    descricao: 'Comando de bloqueio executado, rastreável bloqueado.',
});
exports.notificacoes.set('desbloqueado', {
    titulo: 'Comando de desbloqueado executado',
    codigo: 'desbloqueado',
    categoria: 'emergencia',
    descricao: 'Comando de desbloqueado executado, rastreável desbloqueado.',
});
exports.notificacoes.set('aceleracaoBrusca', {
    titulo: 'Aceleração brusca',
    codigo: 'aceleracaoBrusca',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que o condutor acelerou o veículo de forma brusca.',
});
exports.notificacoes.set('freadaBrusca', {
    titulo: 'Freada brusca',
    codigo: 'freadaBrusca',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que o condutor freou bruscamente o veículo.',
});
exports.notificacoes.set('veiculoTombou', {
    titulo: 'Veiculo tombou',
    codigo: 'veiculoTombou',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que o veículo tombou.',
});
exports.notificacoes.set('veiculoCapotou', {
    titulo: 'Veiculo capotou',
    codigo: 'veiculoCapotou',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que o veículo capotou.',
});
exports.notificacoes.set('tensaoBateriaExternaAlta', {
    titulo: 'Tensão bateria externa alta',
    codigo: 'tensaoBateriaExternaAlta',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que a tensão da bateria externa está acima do aceitável pelo rastreador.',
});
exports.notificacoes.set('tensaoBateriaExternaNormal', {
    titulo: 'Tensão bateria externa normalizou',
    codigo: 'tensaoBateriaExternaNormal',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que a tensão da bateria externa que antes estava acima do suportado normalizou.',
});
exports.notificacoes.set('tensaoBateriaInternaAlta', {
    titulo: 'Tensão bateria interna alta',
    codigo: 'tensaoBateriaInternaAlta',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que a tensão da bateria do rastreador está alta.',
});
exports.notificacoes.set('tensaoBateriaInternaNormal', {
    titulo: 'Tensão bateria interna normalizou',
    codigo: 'tensaoBateriaInternaNormal',
    categoria: 'aviso',
    descricao: 'Essa notificação informa que a tensão da bateria do rastreador normalizou.',
});
//# sourceMappingURL=notificacoes.js.map