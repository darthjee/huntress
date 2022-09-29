const http = require('http');
const _ = require('lodash');

class RequestHandler {
  constructor(request, response) {
    this.request = request;
    this.response = response;

    _.bindAll(this, '_handleResponse', '_handleData', '_end');
  }

  call() {
    http.get('http://sample/', this._handleResponse);
  }

  _handleResponse(response) {
    response
      .on('data', this._handleData)
      .on('end', this._end);
  }

  _handleData(data) {
    this.response.write(data);
  }

  _end() {
    this.response.end();
  }
}

module.exports = (request, response) => {
  return new RequestHandler(request, response).call();
}
