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
    if ((this.protocol === 'http' && this.port !== 80) || (this.protocol === 'https' && this.port !== 443)) {
      url.port = this.port;
    }
    return url.toString();
  }

  _createUrl(path) {
    const fullPath = this.basePath + path.replace(/^\//, '');
    return new URL(fullPath, `${this.protocol}://${this.domain}`);
  }
}

module.exports = ServerConfig;