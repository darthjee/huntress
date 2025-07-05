const http = require('http');
const RequestHandler = require('../../app/request_handler');

describe('RequestHandler', function () {
  let request, response;

  beforeEach(function () {
    request = { url: 'test-path' };
    response = {
      write: jasmine.createSpy('write'),
      end: jasmine.createSpy('end'),
    };

    spyOn(http, 'get').and.callFake((url, callback) => {
      const mockResponse = {
        on: jasmine.createSpy('on').and.callFake((event, handler) => {
          if (event === 'data') {
            handler('mock-data');
          } else if (event === 'end') {
            handler();
          }
          return mockResponse;
        }),
      };
      callback(mockResponse);
    });
  });

  it('should call the correct URL with http://sample/', function () {
    const requestHandler = new RequestHandler(request, response);

    requestHandler.call();

    expect(http.get).toHaveBeenCalledWith('http://sample/test-path', jasmine.any(Function));
  });

  it('should write the correct data to the response', function () {
    const requestHandler = new RequestHandler(request, response);

    requestHandler.call();

    expect(response.write).toHaveBeenCalledWith('mock-data');
  });

  it('should end the response after writing data', function () {
    const requestHandler = new RequestHandler(request, response);

    requestHandler.call();

    expect(response.end).toHaveBeenCalled();
  });
});