const http = require('http');
const _ = require('lodash');

class RequestHandler {
  constructor(request, response) {
    this.request = request;
    this.response = response;

    _.bindAll(this, 'handleResponse', 'handleData', 'end');
  }

  call() {
    http.get('http://sample/', this.handleResponse);
  }

  handleResponse(response) {
    response
      .on('data', this.handleData)
      .on('end', this.end);
  }

  handleData(data) {
    this.response.write(data);
  }

  end() {
    this.response.end();
  }
}

module.exports = (request, response) => {
  return new RequestHandler(request, response).call();
}
