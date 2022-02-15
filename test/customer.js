const app = require("../index");
const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;
let CustomerCtrl = require("../src/routes/CustomerCtrl")

describe('Cerealis Integration Tests', function() {
    describe('#GET / customer', function() {
        it('should get all customer', function(done) {
            request(app).get("/customer")
                .end(function(err, res) {
                    expect(res.statusCode).to.equal(200);
                    done();
                });
        });
    });
});
