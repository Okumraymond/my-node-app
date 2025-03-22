const request = require('supertest');
const { app, server } = require('../app');  // Import both app and server

describe('GET /', function () {
    after(() => {
        server.close(); // ✅ Close the server after tests to free up port 3000
    });

    it('responds with Hello, World!', function (done) {
        request(app)
            .get('/')
            .expect(200)
            .expect('Hello, World!', done);
    });
});
