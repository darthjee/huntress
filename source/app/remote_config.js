const { URL } = require('url');

class RemoteConfig {
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
    const fullPath = this._normalizePath(this.basePath, path);
    return new URL(fullPath, `${this.protocol}://${this.domain}:${this.port}`);
  }

  _normalizePath(basePath, path) {
    return `${basePath.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`;
  }
}

module.exports = RemoteConfig;