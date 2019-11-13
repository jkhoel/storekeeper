// lib/app.ts
import express from 'express';
import keys from '../config/keys'

// Import API Endpoints
import endpoint from './routes/default'

// Create a new express application instance
const app: express.Application = express();

// Map endpoints to paths
app.use(keys.rootUrl, endpoint);

// Start app
app.listen(keys.apiPort, () => console.log(`Storekeeper listening on port ${keys.apiPort} - NODE_ENV: ${process.env.NODE_ENV}`));

// Export our app for testing purposes
export default app;