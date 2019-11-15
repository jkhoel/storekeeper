import express from 'express';
import getHandler from '../handlers/handlers';

// Data Interfaces 
import Airports from '../interfaces/Airports'

// Initialize Handlers
const getAirports = getHandler(new Airports)

// Initialize the Router
const airports = express.Router();

// Routes:
airports.get('/', (req, res) => {
  getAirports(req, (error?: { message: Object }, result?: { status: number, responseJson: Object }) => {
    if (error) {
      res.status(500)
      return res.json({ message: error.message })
    }

    res.status(result.status)
    return res.json(result.responseJson)
  })
})

export default airports;
