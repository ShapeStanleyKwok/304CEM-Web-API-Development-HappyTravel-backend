const request = require('supertest')
const expect = require('chai').expect
const app = require('../app')

describe("API TEST: '/'", function () {
    it('[GET]', function (done) {
        request(app)
            .get('/')
            .expect(200)
            .end((err, res) => {
                if (err) done(err)
                expect(res.body).to.include.keys('_links')
                done()
            });
    });
});