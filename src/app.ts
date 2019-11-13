// lib/app.ts
import express from 'express';

require('dotenv').config()

const PORT = process.env.PORT           // keys.apiPort
const ROOT_URL = process.env.ROOT_URL   // keys.rootUrl

// Import API Endpoints
import endpoint from './routes/default'

// Create a new express application instance
const app: express.Application = express();

// Map endpoints to paths
app.use(ROOT_URL, endpoint);

// Start app
app.listen(PORT, () => console.log(`Storekeeper listening on port ${PORT} - NODE_ENV: ${process.env.NODE_ENV}`));

// Export our app for testing purposes
export default app;