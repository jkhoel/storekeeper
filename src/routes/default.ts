import express from 'express';

const endpoint = express.Router();

endpoint.get('/', (req, res) => {
  res.send({ msg: 'Storekeeper API is running!' });
});

endpoint.post('/', (req, res) => {
  res.send({ header: req.headers, body: req.body });
});

export default endpoint;
