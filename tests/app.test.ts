import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../src/app';

import getAll from '../src/handlers/getAll'

// Configure Chai
chai.use(chaiHttp);
chai.should();

describe('Endpoint: /api/v1/:', function () {
  it('GET   /api/v1/ - Should respond to a basic request to root endpoint', function (done) {
    chai
      .request(app)
      .get('/api/v1/')
      .end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  it('POST  /api/v1/ - Should return the header and body of the requests sent', function (done) {
    chai
      .request(app)
      .post('/api/v1/')
      .type('application/json')
      .send({ foo: 'bar' })
      .end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.include.keys('header', 'body');
        done();
      });
  });
});


describe('Endpoint: /api/v1/airports:', () => {
    it('GET /api/v1/airports - Should return status 200 and all airports as an object', function (done) {
      // Mock a request
      const req = {}

      // Mock some returned data
      const airportList = [{ airfield_id: 40 }, { airfield_id: 39 }, { airfield_id: 38 }]

      // Create a dummy object that adheres to interfaces/Airport's interface
      const Airports = {
        getAll: function (callback: any) { callback(null, airportList) }
      }

      // Create the handler, pass the dummy Airports object
      const handleRequest = getAll(Airports)

      // Call the handler!
      handleRequest(req, function (err: any, result: any) {
        if (err) return done(err);

        // Do assertions \o/
        result.should.have.status(200);
        // TODO: Do assertion on the type of data returned
        done()
      })
    })

  // it('GET /api/v1/airports - Should return status 200 and all airports as an object', function (done) {
  //   chai.request(app).get('/api/v1/api/v1/airports').end(function (err, res) {
  //     res.should.have.status(200);
  //     res.body.should.be.a('object');
  //     done();
  //   });
  // });

  // it('GET /api/v1/airports?limit=3 - Should return status 200 and an object with 3 airports', function (done) {
  //   chai.request(app).get('/api/v1/api/v1/airports?limit=3').end(function (err, res) {
  //     res.should.have.status(200);
  //     res.body.should.be.a('object');
  //     console.log('res.body: %s', Object.keys(res.body).length)
  //     done();
  //   });
  // });
})
