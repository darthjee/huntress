class RequestHandler {
  constructor(req, resp) {
    this.req = req;
    this.resp = resp
  }

  call() {
    console.info(this);
  }
}

module.exports = (req, resp) => {
  return new RequestHandler(req, resp).call();
}
