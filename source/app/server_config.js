const { URL } = require('url');

class ServerConfig {
  constructor({ protocol, domain, port, basePath }) {
    this.protocol = protocol || 'http';
    this.domain = domain;
    this.port = port || 80;
    this.basePath = basePath || '/';
  }

  fullUrl(path) {
    const url = this._createUrl(path);
    return url.toString();
  }

  _createUrl(path) {
    const fullPath = `${this.basePath.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`;
    
    return new URL(fullPath, `${this.protocol}://${this.domain}:${this.port}`);
  }
}

module.exports = ServerConfig;