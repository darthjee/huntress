const RemoteConfig = require('../../app/remote_config');

describe('RemoteConfig', function () {
  describe('fullUrl', function () {
    let protocol, domain, port, basePath;

    const subject = () => new RemoteConfig({ protocol, domain, port, basePath });

    describe('when using HTTP protocol', function () {
      beforeEach(function () {
        protocol = 'http';
        domain = 'example.com';
        basePath = '/';
      });

      describe('with default port', function () {
        beforeEach(function () {
          port = 80;
        });

        it('constructs the correct full URL', function () {
          const url = subject().fullUrl('/test');
          expect(url).toBe('http://example.com/test');
        });
      });

      describe('with custom port', function () {
        beforeEach(function () {
          port = 3000;
        });

        it('constructs the correct full URL', function () {
          const url = subject().fullUrl('/test');
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
        });

        it('constructs the correct full URL', function () {
          const url = subject().fullUrl('/test');
          expect(url).toBe('https://example.com/test');
        });
      });

      describe('with custom port', function () {
        beforeEach(function () {
          port = 8443;
        });

        it('constructs the correct full URL', function () {
          const url = subject().fullUrl('/test');
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
      });

      it('constructs the correct full URL with basePath', function () {
        const url = subject().fullUrl('/test');
        expect(url).toBe('http://example.com/api/test');
      });

      it('constructs the correct full URL with paths without leading slashes', function () {
        const url = subject().fullUrl('test');
        expect(url).toBe('http://example.com/api/test');
      });
    });
  });
});