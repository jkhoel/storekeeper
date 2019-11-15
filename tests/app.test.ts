import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../src/app';

import getAllhandler from '../src/handlers/getAll'
import Airports from '../src/interfaces/Airports';
import { Func } from 'mocha';

// Configure Chai
chai.use(chaiHttp);
chai.should();

// Interface for mocking interface responses
interface MockSqlQueryResult {
  error?: Object,
  rows?: Object[]
}

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

      // Mock a successfull SQL request
      const result: MockSqlQueryResult = {
        error: null,
        rows: [{ airfield_id: 40 }, { airfield_id: 39 }, { airfield_id: 38 }]
      }

      // Create a dummy object to simulate the interfaces/Airports class      
      const Airports = {
        getAll: function (callback: Function) { callback(result)}
      }
      
      // Create and initialize the handler
      const handleRequest = getAllhandler(Airports)


      // Call the handler
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
