const http = require('http');
const _ = require('lodash');
const RemoteConfig = require('./remote_config');

class RequestHandler {
  constructor (request, response, remoteConfig) {
    this.request = request;
    this.response = response;
    this.remoteConfig = remoteConfig;
    
    _.bindAll(this, '_handleResponse', '_handleData', '_end');
  }

  static build(remoteConfig) {
    return (request, response) => new RequestHandler(request, response, remoteConfig).call();
  }

  call () {
    http.get(this._url(), this._handleResponse);
  }

  _url () {
    return this.remoteConfig.fullUrl(this.request.url);
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