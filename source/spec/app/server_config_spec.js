const ServerConfig = require('../../app/server_config');

describe('ServerConfig', function () {
  describe('fullUrl', function () {
    let config, protocol, domain, port, basePath;

    describe('when using HTTP protocol', function () {
      beforeEach(function () {
        protocol = 'http';
        domain = 'example.com';
        basePath = '/';
      });

      describe('with default port', function () {
        beforeEach(function () {
          port = 80;
          config = new ServerConfig({ protocol, domain, port, basePath });
        });

        it('constructs the correct full URL', function () {
          const url = config.fullUrl('/test');
          expect(url).toBe('http://example.com/test');
        });
      });

      describe('with custom port', function () {
        beforeEach(function () {
          port = 3000;
          config = new ServerConfig({ protocol, domain, port, basePath });
        });

        it('constructs the correct full URL', function () {
          const url = config.fullUrl('/test');
          expect(url).toBe('http://example.com:3000/test');
        });
      });
    });

    describe('when using HTTPS protocol', function () {
      beforeEach(function () {
        protocol = 'https';
        domain = 'example.com';
        basePath = '/';
      });

      describe('with default port', function () {
        beforeEach(function () {
          port = 443;
          config = new ServerConfig({ protocol, domain, port, basePath });
        });

        it('constructs the correct full URL', function () {
          const url = config.fullUrl('/test');
          expect(url).toBe('https://example.com/test');
        });
      });

      describe('with custom port', function () {
        beforeEach(function () {
          port = 8443;
          config = new ServerConfig({ protocol, domain, port, basePath });
        });

        it('constructs the correct full URL', function () {
          const url = config.fullUrl('/test');
          expect(url).toBe('https://example.com:8443/test');
        });
      });
    });

    describe('when handling basePath', function () {
      beforeEach(function () {
        protocol = 'http';
        domain = 'example.com';
        port = 80;
        basePath = '/api/';
        config = new ServerConfig({ protocol, domain, port, basePath });
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