import express from 'express';
// import sql from '../utils/db';

// Data Interfaces
import Airports from '../interfaces/Airports'

// Handlers
import getAllhandler from '../handlers/getAll';

// Initialize Handlers
const getAll = getAllhandler(new Airports)

// Initialize the Router
const airports = express.Router();

// Add Routes
airports.get('/', (request, res) => {
  getAll(request, (error: any, result: any) => {
    if (error) {
      res.status(500)
      return res.json({ message: error.message })
    }

    res.status(result.status)
    return res.json(result.responseJson)
  })
})

// airports.get('/', (req, res) => {
//   // Default value if limit is not passed
//   // let limit = 'LIMIT 0, 50';
//   let limit = '';
//   if (req.query.limit) limit = `LIMIT 0, ${req.query.limit}`;

//   let desc = '';
//   if (req.query.desc !== 'false') desc = `ORDER BY af_icao DESC`;

//   const query = `SELECT * from list_airfields ${desc} ${limit}`;
//   sql(query).then((data: { error: any; rows: any; }) => {
//     if (data.error) res.json(data);
//     res.json(data.rows);
//   });
// });

export default airports;
