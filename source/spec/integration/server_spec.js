const http = require('http');
const request = require('request');

require('../../app/server');

describe('Server', function() {
  it('returns the content from other server', function(done){
    request.get('http://localhost:80/', function(err, response) {
      expect(response.body).toBe('This is the root route');
      done();
    });
  });

  it('returns the content status', function(done){
    request.get('http://localhost:80/', function(err, response) {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
