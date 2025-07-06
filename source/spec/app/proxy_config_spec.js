const ProxyConfig = require('../../app/proxy_config');
const RemoteConfig = require('../../app/remote_config');
const LocalConfig = require('../../app/local_config');

describe('ProxyConfig', function () {
  let domain, protocol, port, basePath, listenPort;

  const subject = () => new ProxyConfig({ domain, protocol, port, basePath, listenPort });

  beforeEach(function () {
    domain = 'example.com';
    protocol = 'http';
    port = 80;
    basePath = '/api';
    listenPort = 3000;
  });

  describe('remoteConfig', function () {
    it('should initialize with the correct values', function () {
      const proxyConfig = subject();
      const remoteConfig = proxyConfig.remoteConfig;

      expect(remoteConfig).toBeInstanceOf(RemoteConfig);
      expect(remoteConfig.protocol).toBe(protocol);
      expect(remoteConfig.domain).toBe(domain);
      expect(remoteConfig.port).toBe(port);
      expect(remoteConfig.basePath).toBe(basePath);
    });

    describe('when no protocol is provided', function () {
      beforeEach(function () {
        protocol = undefined;
      });

      it('should default to "http"', function () {
        const proxyConfig = subject();
        const remoteConfig = proxyConfig.remoteConfig;

        expect(remoteConfig.protocol).toBe('http');
      });
    });

    describe('when no port is provided', function () {
      beforeEach(function () {
        port = undefined;
      });

      it('should default to 80', function () {
        const proxyConfig = subject();
        const remoteConfig = proxyConfig.remoteConfig;

        expect(remoteConfig.port).toBe(80);
      });
    });

    describe('when no basePath is provided', function () {
      beforeEach(function () {
        basePath = undefined;
      });

      it('should default to "/"', function () {
        const proxyConfig = subject();
        const remoteConfig = proxyConfig.remoteConfig;

        expect(remoteConfig.basePath).toBe('/');
      });
    });
  });

  describe('localConfig', function () {
    describe('when listenPort is provided', function () {
      beforeEach(function () {
        listenPort = 3000;
      });

      it('should initialize with the provided listenPort', function () {
        const proxyConfig = subject();
        const localConfig = proxyConfig.localConfig;

        expect(localConfig).toBeInstanceOf(LocalConfig);
        expect(localConfig.port).toBe(listenPort);
      });
    });

    describe('when listenPort is not provided', function () {
      beforeEach(function () {
        listenPort = undefined;
      });

      it('should set the default listenPort to 3000', function () {
        const proxyConfig = subject();
        const localConfig = proxyConfig.localConfig;

        expect(localConfig.port).toBe(3000);
      });
    });
  });
});