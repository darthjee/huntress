const http = require('http');
const requestHandler = require('./request_handler');

const server = http.createServer(requestHandler)

console.info('here', requestHandler);

server.listen(80)

console.info('there');
