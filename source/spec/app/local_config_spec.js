const LocalConfig = require('../../app/local_config');

describe('LocalConfig', function () {
  it('should set the default port to 3000 if no port is provided', function () {
    const config = new LocalConfig({});
    expect(config.port).toBe(3000);
  });

  it('should set the port to the provided value', function () {
    const config = new LocalConfig({ port: 8080 });
    expect(config.port).toBe(8080);
  });
});