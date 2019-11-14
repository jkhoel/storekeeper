import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../src/app';

// Configure Chai
chai.use(chaiHttp);
chai.should();

describe('Storekeeper:', () => {
  it('Should respond to a basic GET /api/v1/ request to root endpoint', (done) => {
    chai.request(app).get('/api/v1/').end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('object');
      done();
    });
  });

  describe('Endpoint: /api/v1/airports:', () => {
    it('GET /api/v1/airports - Should return status 200 and an Object', (done) => {
      chai.request(app).get('/api/v1/api/v1/airports').end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
    });
    
    it('GET /api/v1/airports?limit=3 - Should return status 200 and an Object with 3 airports', (done) => {
      chai.request(app).get('/api/v1/api/v1/airports').end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        console.log('res.body: %s',  Object.keys(res.body).length)
        done();
      });
    });
  })
});
