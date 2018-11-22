import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';

import config from './config';
import router from './using-postgres/routes/parcels';
import userRoutes from './using-postgres/routes/user';


const app = express();
app.server = http.createServer(app);

// middleware
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// api routes v1
app.use('/api/v1', router);
app.use('/api/v1/auth', userRoutes);
app.use('/api/v1/users', userRoutes);

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

app.get('/*', (req, res) => {
  res.send(404);
});


app.server.listen(config.port);

export default app;
