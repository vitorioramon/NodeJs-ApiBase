'use restrict'

const app = require('../src/app');
const debug = require('debug')('myDebug:api-server');
const http = require('http');

const apiPort = 3000;
app.set('port', apiPort);

const server = http.createServer(app);

server.listen(apiPort);
server.on('error', onError);
server.on('listening', onListening);
console.log('API - versão ' + global.VERSAO_API + ' iniciado na porta ' + apiPort);

function onError(error) {
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}