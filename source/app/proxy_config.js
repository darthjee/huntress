const RemoteConfig = require('./remote_config');
const LocalConfig = require('./local_config');

class ProxyConfig {
  constructor({ domain, protocol = 'http', port = 80, basePath = '/', listenPort = 3000 }) {
    this.remoteConfig = new RemoteConfig({ domain, protocol, port, basePath });
    this.localConfig = new LocalConfig({ port: listenPort });
  }
}

module.exports = ProxyConfig;