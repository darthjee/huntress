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