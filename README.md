# Decodificar Notificações

O projeto tem por finalizada decodificar as notificações enviadas pelos rastreadores. Cada notificação recebida possui um código, esse código é o identificador da notificação. O projeto vai receber esse código e retornar um objeto descrevendo essa notificação.

## Instalação

```bash
npm install --save git+ssh://@github.com:rx30i/decodificar-notificacao.git
```

## Exemplo notificação.

```bash
# Exemplo notificação recebida
{
    "integracao" : 'suntech300',
    "imei"       : '111111111',
    "notificacao": 'fonteDeEnergiaPrincipalDesconectada',
}
```

## Como usar.

```javascript

const decodificarNotificacao = new DecodificarNotificacao();
const resposta = decodificarNotificacao.decodificar('fonteDeEnergiaPrincipalDesconectada');

/** Resposta */
{
  titulo   : 'Desconectado da fonte de alimentação principal.',
  codigo   : 'fonteDeEnergiaPrincipalDesconectada',
  categoria: 'emergencia',
  descricao: 'Desconectado da fonte de alimentação principal.',
}

```
