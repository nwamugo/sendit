import http from 'http';
import express from 'express';

import config from './config';
import router from './routes/parcels';
import usersRoutes from './routes/users';


const app = express();
app.server = http.createServer(app);


// middleware
// parse application/json
app.use(express.json());


// api routes v1
app.use('/api/v1', router);
app.use('/api/v1/users', usersRoutes);

app.server.listen(config.port);

export default app;
