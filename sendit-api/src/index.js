import http from 'http';
import express from 'express';

import config from './config';
import routerJsObject from './using-js-object/controllers/parcel';
import routerPostgres from './using-postgres/routes/parcels';
import usersRoutes from './routes/users';


const router = process.env.TYPE === 'db' ? routerPostgres : routerJsObject;

console.log(process.env.TYPE);
const app = express();
app.server = http.createServer(app);

// middleware
// parse application/json
app.use(express.json());


// api routes v1
app.use('/api/v1', router);
app.use('/api/v1/users', usersRoutes);

// Test Route
app.get('/', (req, res) => {
  res.json(
    {
      greetings: 'Welcome to our API!',
      get: '/api/v1/parcels',
      get2: '/api/v1/parcels/<parcelId>',
      get3: '/api/v1/users/<userId>/parcels',
      put: '/api/v1/parcels/<parcelId>/cancel',
      post: 'api/v1/parcels',
    },
  );
});


app.server.listen(config.port);

export default app;
