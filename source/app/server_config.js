class ServerConfig {
    constructor({ domain, port, basePath }) {
      this.domain = domain;
      this.port = port;
      this.basePath = basePath;
    }
  
    fullUrl(path) {
      const base = `http://${this.domain}${this.basePath}`;
      return `${base}${path}`;
    }
  }
  
  module.exports = ServerConfig;