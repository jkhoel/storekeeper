// lib/app.ts
import express from 'express';
import bodyParser from 'body-parser';

require('dotenv').config();

const PORT = process.env.PORT; // keys.apiPort
const ROOT_URL = process.env.ROOT_URL; // keys.rootUrl

// Import API Endpoints
import endpoint from './routes/default';
import airports from './routes/airports';

// TODO: Do database creation and/or checks here if flags are passed to nodejs
  // TODO: Check that .env holds required parameters
  // TODO: Check that user is able to access the database
  // TODO: Create database 'storekeeper' if it does not exist http://www.mysqltutorial.org/mysql-create-database/
  // TODO: Create tables for all model files

// Create a new express application instance
const app: express.Application = express();

// Middleware config
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Map endpoints to paths
app.use(ROOT_URL, endpoint);
app.use(`${ROOT_URL}/airports`, airports);

// Start app
app.listen(PORT, () =>
  console.log(
    `Storekeeper listening on port ${PORT} - NODE_ENV: ${process.env.NODE_ENV}`
  )
);

// Export our app for testing purposes
export default app;
