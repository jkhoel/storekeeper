import express from 'express';

const endpoint = express.Router();

endpoint.get('/', (req, res) => {
  res.send({ msg: 'Storekeeper API is running!' });
});

endpoint.post('/', (req, res) => {
  console.log('\n\nHeader: ', req.headers)
  console.log('Body: ', req.body)

  res.send({ header: req.headers, res: req.body });
});

export default endpoint;
