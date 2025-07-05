const http = require('http');
const requestHandler = require('./request_handler');
const ProxyConfig = require('./proxy_config');

const proxyConfig = new ProxyConfig({
  domain: 'sample',
  protocol: 'http',
  port: 80,
  basePath: '/',
  listenPort: 80,
});

const server = http.createServer(requestHandler.build(proxyConfig.remoteConfig));
const port = proxyConfig.localConfig.port;

server.listen(port);
console.info('------------------------------------------------');
console.info('listening at port ' + port);
console.info('------------------------------------------------');