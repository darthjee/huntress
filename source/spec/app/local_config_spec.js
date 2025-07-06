const LocalConfig = require('../../app/local_config');

describe('LocalConfig', function () {
  let port;

  const subject = () => new LocalConfig({ port });

  describe('when no port is provided', function () {
    beforeEach(function () {
      port = undefined;
    });

    it('should set the default port to 3000', function () {
      const config = subject();
      expect(config.port).toBe(3000);
    });
  });

  describe('when a port is provided', function () {
    beforeEach(function () {
      port = 8080;
    });

    it('should set the port to the provided value', function () {
      const config = subject();
      expect(config.port).toBe(8080);
    });
  });
});