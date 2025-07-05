class ServerConfig {
  constructor(config) {
    this.domain = config.domain || 'localhost';
    this.port = config.port || 80;
    this.basePath = config.basePath || '/';
  }

  fullUrl(path) {
    const base = `http://${this.domain}${this.basePath}`;
    return `${base}${path}`;
  }
}

module.exports = ServerConfig;
