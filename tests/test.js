const request = require('supertest');
const app = require('../app'); // Ensure you're requiring the app file

describe('GET /', () => {
    it('responds with Hello, World!', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .expect('Hello, World!', done);
    });
});

