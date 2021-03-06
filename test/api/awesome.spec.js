import createServer from '../_helpers/createServer';

describe('awesome API', function() {
  let request;
  before(async function () {
    request = await createServer();
  });

  describe('GET /api/stuff', function() {
    it('returns the answer', function(done) {
      request.get('/api/stuff')
        .expect(200, {
          data: 'What is the universe? The answer is 42.',
          testing: true
        })
        .end(done);
    });
  });

  describe('GET /not/found', function() {
    it('returns an object with a message', function(done) {
      request.get('/not/found')
        .expect(404, { message: 'Whatever you were looking for, we ain\'t got it, son.' })
        .end(done);
    });
  });

  describe('POST /api/stuff', function() {
    it('returns whatever was POSTed', function(done) {
      request.post('/api/stuff')
        .send({ hello: 'world' })
        .expect(200, {
          youSaid: {
            hello: 'world'
          }
        })
        .end(done);
    });
  });
});