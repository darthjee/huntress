const http = require('http');
const _ = require('lodash');
const ServerConfig = require('./server_config');

class RequestHandler {
  constructor (request, response) {
    this.request = request;
    this.response = response;
    this.serverConfig = new ServerConfig('sample', 80, '/');

    _.bindAll(this, '_handleResponse', '_handleData', '_end');
  }

  static call(request, response) {
    new RequestHandler(request, response).call();
  }

  call () {
    http.get(this._url(), this._handleResponse);
  }

  _url () {
    return this.serverConfig.fullUrl(this.request.url);
  }

  _handleResponse (response) {
    response
      .on('data', this._handleData)
      .on('end', this._end);
  }

  _handleData (data) {
    this.response.write(data);
  }

  _end () {
    this.response.end();
  }
}

module.exports = RequestHandler;