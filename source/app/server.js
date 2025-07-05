const http = require('http');
const requestHandler = require('./request_handler');

const RemoteConfig = require('./remote_config');
const server = http.createServer(requestHandler.build(new RemoteConfig({domain: 'sample', port: 80, basePath: '/'})));
const port = 80;

server.listen(port);
console.info('------------------------------------------------');
console.info('listening at port ' + port);
console.info('------------------------------------------------');
