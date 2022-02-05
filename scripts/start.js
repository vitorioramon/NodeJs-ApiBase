'use restrict'

const app = require('../src/app');
const log = require('debug')('api-server:start');
const http = require('http');

if (!process.env.API_PORT) {
  console.error("ERRO: Porta da API não definida!")
  return;
}

const apiPort = process.env.API_PORT;
app.set('port', apiPort);

const server = http.createServer(app);

server.listen(apiPort);
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
  log("SERVER ERROR:", error);
}

function onListening() {
  const addr = server.address();
  log(`${global.DESCRICAO_API} - versão ${global.VERSAO_API} iniciada na porta ${addr.port}`);
}