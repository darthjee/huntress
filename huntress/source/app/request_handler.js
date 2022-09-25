const http = require('http');
const lodash = require('lodash');

class RequestHandler {
  constructor(request, response) {
    this.request = request;
    this.response = response;
  }

  call() {
    http.get('http://sample/', this.handleResponse);
  }

  handleResponse(response) {
    response.on('data', this.handleData);
  }

  handleData(data) {
    console.info(data);
  }
}

module.exports = (request, response) => {
  return new RequestHandler(request, response).call();
}
