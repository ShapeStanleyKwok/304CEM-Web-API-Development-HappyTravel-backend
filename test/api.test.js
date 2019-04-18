const request = require('supertest')
const expect = require('chai').expect
const app = require('../app')

describe("API TEST: '/api'", function () {
    it('[GET]', function (done) {
        request(app)
            .get('/api')
            .expect(200)
            .end(err => {
                if (err) done(err)
                done()
            });
    });
});