import chai from 'chai'
import chaiHttp from 'chai-http'

import app from '../src/server'

// Configure Chai
chai.use(chaiHttp)
chai.should()

describe('The Server:', () => {
  it('Should respond to a basic GET / request', (done) => {
    chai.request(app).get('/').end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('object');
      done();
    })
  })
})