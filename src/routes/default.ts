import express from 'express';

const endpoint = express.Router();

endpoint.get('/', (req, res) => {
  res.send({ msg: 'Storekeeper API is running!' });
});

export default endpoint;
