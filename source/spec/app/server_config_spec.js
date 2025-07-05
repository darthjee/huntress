const ServerConfig = require('../../app/server_config');

describe('ServerConfig', function () {
  describe('fullUrl', function () {
    describe('when using HTTP protocol', function () {
      describe('with default port', function () {
        it('constructs the correct full URL', function () {
          const config = new ServerConfig({ protocol: 'http', domain: 'example.com', port: 80, basePath: '/' });
          const url = config.fullUrl('/test');
          expect(url).toBe('http://example.com/test');
        });
      });

      describe('with custom port', function () {
        it('constructs the correct full URL', function () {
          const config = new ServerConfig({ protocol: 'http', domain: 'example.com', port: 3000, basePath: '/' });
          const url = config.fullUrl('/test');
          expect(url).toBe('http://example.com:3000/test');
        });
      });
    });

    describe('when using HTTPS protocol', function () {
      describe('with default port', function () {
        it('constructs the correct full URL', function () {
          const config = new ServerConfig({ protocol: 'https', domain: 'example.com', port: 443, basePath: '/' });
          const url = config.fullUrl('/test');
          expect(url).toBe('https://example.com/test');
        });
      });

      describe('with custom port', function () {
        it('constructs the correct full URL', function () {
          const config = new ServerConfig({ protocol: 'https', domain: 'example.com', port: 8443, basePath: '/' });
          const url = config.fullUrl('/test');
          expect(url).toBe('https://example.com:8443/test');
        });
      });
    });

    describe('when handling basePath', function () {
      it('constructs the correct full URL with basePath', function () {
        const config = new ServerConfig({ protocol: 'http', domain: 'example.com', port: 80, basePath: '/api/' });
        const url = config.fullUrl('/test');
        expect(url).toBe('http://example.com/api/test');
      });

      it('constructs the correct full URL with paths without leading slashes', function () {
        const config = new ServerConfig({ protocol: 'http', domain: 'example.com', port: 80, basePath: '/api/' });
        const url = config.fullUrl('test');
        expect(url).toBe('http://example.com/api/test');
      });
    });
  });
});