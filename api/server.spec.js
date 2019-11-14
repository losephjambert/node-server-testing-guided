const request = require('supertest');

const server = require('./server.js');

it('should set db environment to testing', function() {
  // expect(process.env);
});

describe('server', function() {
  describe('GET /', function() {
    // run the server
    // make GET req to /
    // verify that it returns a 200
    it('should return 200 OK', function() {
      return request(server)
        .get('/')
        .then(function(res) {
          expect(res.status).toBe(200);
        });
    });

    it('should return JSON formatted response', function() {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });

    it(`should return an api property with the value 'up' inside the body`, function() {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.body).toEqual({ api: 'up' });
          expect(res.body.api).toBe('up');
        });
    });
  });
});

// the endpoint returns the correct http status code based on input
// the endpoint returns the right data format (json in our case)
// the endpoint returns the right data in the body based on input
