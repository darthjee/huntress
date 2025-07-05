const ServerConfig = require('../../app/server_config');

describe('ServerConfig', function () {
  describe('fullUrl', function () {
    let config;

    describe('when using HTTP protocol', function () {
      describe('with default port', function () {
        beforeEach(function () {
          config = new ServerConfig({ protocol: 'http', domain: 'example.com', port: 80, basePath: '/' });
        });

        it('constructs the correct full URL', function () {
          const url = config.fullUrl('/test');
          expect(url).toBe('http://example.com/test');
        });
      });

      describe('with custom port', function () {
        beforeEach(function () {
          config = new ServerConfig({ protocol: 'http', domain: 'example.com', port: 3000, basePath: '/' });
        });

        it('constructs the correct full URL', function () {
          const url = config.fullUrl('/test');
          expect(url).toBe('http://example.com:3000/test');
        });
      });
    });

    describe('when using HTTPS protocol', function () {
      describe('with default port', function () {
        beforeEach(function () {
          config = new ServerConfig({ protocol: 'https', domain: 'example.com', port: 443, basePath: '/' });
        });

        it('constructs the correct full URL', function () {
          const url = config.fullUrl('/test');
          expect(url).toBe('https://example.com/test');
        });
      });

      describe('with custom port', function () {
        beforeEach(function () {
          config = new ServerConfig({ protocol: 'https', domain: 'example.com', port: 8443, basePath: '/' });
        });

        it('constructs the correct full URL', function () {
          const url = config.fullUrl('/test');
          expect(url).toBe('https://example.com:8443/test');
        });
      });
    });

    describe('when handling basePath', function () {
      beforeEach(function () {
        config = new ServerConfig({ protocol: 'http', domain: 'example.com', port: 80, basePath: '/api/' });
      });

      it('constructs the correct full URL with basePath', function () {
        const url = config.fullUrl('/test');
        expect(url).toBe('http://example.com/api/test');
      });

      it('constructs the correct full URL with paths without leading slashes', function () {
        const url = config.fullUrl('test');
        expect(url).toBe('http://example.com/api/test');
      });
    });
  });
});