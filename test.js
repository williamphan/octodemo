var request = require('supertest');
var assert = require('assert');

describe('loading express', function () {
    var server;
    beforeEach(function () {
        server = require('./index');
    });
    afterEach(function () {
        server.close();
    });
    it('responds to /', function testSlash(done) {
        request(server)
            .get('/')
            .expect(200, done);
    });
    it('404 everything else', function testPath(done) {
        request(server)
            .get('/foo/bar')
            .expect(404, done);
    });
});

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      // replace 4 with value that is present in the array
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
