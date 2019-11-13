import chai from 'chai'
import chaiHttp from 'chai-http'

import server from '../src/app'

// Configure Chai
chai.use(chaiHttp)
chai.should()

describe('Storekeeper:', () => {
  it('Should respond to a basic GET /api/v1/ request to root endpoint', (done) => {
    chai.request(server).get('/api/v1/').end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('object');
      done();
    })
  })
})