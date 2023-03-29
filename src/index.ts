import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import http from 'http';
import * as api from './routes/api.route';
import { connect_to_database } from './database/conect';
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(api.default);
const port = process.env.PORT || '4000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
 server.on('listening', () => {
  console.log(`server on port: ${port}`);
  connect_to_database()
});



