const ServerConfig = require('../../app/server_config');

describe('ServerConfig', function () {
  it('should construct the correct full URL with default HTTP port', function () {
    const config = new ServerConfig({ protocol: 'http', domain: 'example.com', port: 80, basePath: '/' });
    const url = config.fullUrl('/test');
    expect(url).toBe('http://example.com/test');
  });

  it('should construct the correct full URL with custom HTTP port', function () {
    const config = new ServerConfig({ protocol: 'http', domain: 'example.com', port: 3000, basePath: '/' });
    const url = config.fullUrl('/test');
    expect(url).toBe('http://example.com:3000/test');
  });

  it('should construct the correct full URL with default HTTPS port', function () {
    const config = new ServerConfig({ protocol: 'https', domain: 'example.com', port: 443, basePath: '/' });
    const url = config.fullUrl('/test');
    expect(url).toBe('https://example.com/test');
  });

  it('should construct the correct full URL with custom HTTPS port', function () {
    const config = new ServerConfig({ protocol: 'https', domain: 'example.com', port: 8443, basePath: '/' });
    const url = config.fullUrl('/test');
    expect(url).toBe('https://example.com:8443/test');
  });

  it('should handle basePath correctly', function () {
    const config = new ServerConfig({ protocol: 'http', domain: 'example.com', port: 80, basePath: '/api/' });
    const url = config.fullUrl('/test');
    expect(url).toBe('http://example.com/api/test');
  });

  it('should handle paths without leading slashes', function () {
    const config = new ServerConfig({ protocol: 'http', domain: 'example.com', port: 80, basePath: '/api/' });
    const url = config.fullUrl('test');
    expect(url).toBe('http://example.com/api/test');
  });
});