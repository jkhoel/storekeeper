import express from 'express';

const endpoint = express.Router();

endpoint.get('/', (req, res) => {
  res.send({ msg: 'Storekeeper API is running!' });
});

endpoint.get('/echo', (req, res) => {
  console.log('\n\nHeader: ', req.headers)
  console.log('Body: ', req.body)

  res.send({ header: req.headers, body: req.body || {} });
});

export default endpoint;
