class ServerConfig {
    constructor({ protocol, domain, port, basePath }) {
      this.protocol = protocol || 'http';
      this.domain = domain;
      this.port = port || 80;
      this.basePath = basePath || '/';
    }
  
    fullUrl(path) {
      const base = `${this.protocol}://${this.domain}${this.basePath}`;
      return `${base}${path}`;
    }
  }
  
  module.exports = ServerConfig;