import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../src/app';
import getHandler from '../src/handlers/handlers'

chai.use(chaiHttp);
chai.should();

// Interface for mocking interface responses
interface MockSqlQueryResult {
  error?: Object,
  rows?: Object[]
}

describe('/api/v1/airports:', () => {

  // Mock a successfull SQL request
  const result: MockSqlQueryResult = {
    error: null,
    rows: [{ airfield_id: 40 }, { airfield_id: 39 }, { airfield_id: 38 }]
  }

  // Create a dummy object to simulate the interfaces/Airports class      
  const Airports = {
    onGet: function (request: Object, callback: Function) { callback(result) }
  }

  // Create and initialize the handler
  const handleRequest = getHandler(Airports)

  it('GET /api/v1/airports - Should return status 200 and all airports as an array of objects', function (done) {
    // Mock a request with no query parameters
    const req = {}

    // Call the handler
    handleRequest(req, function (err: any, result: any) {
      if (err) return done(err);

      // Do assertions \o/
      result.should.have.status(200);
      result.should.have.property('responseJson')
      result.responseJson.should.be.an('object').with.property('rows')
      result.responseJson.rows.should.be.an('array').with.lengthOf(3)
      done()
    })
  })

  it('GET /api/v1/airports?limit=2 - Should return status 200 and airports as an array of objects', function (done) {
    // Mock a request with no query parameters
    const req = { limit: 3 }

    // Call the handler
    handleRequest(req, function (err: any, result: any) {
      if (err) return done(err);

      // Do assertions \o/
      result.should.have.status(200);
      result.should.have.property('responseJson')
      result.responseJson.should.be.an('object').with.property('rows')
      result.responseJson.rows.should.be.an('array')
      done()
    })
  })
})
