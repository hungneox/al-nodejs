import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import socket from 'socket.io';
import cors from 'cors';
import apiRouter from './api';

const app = express();

const host = 'localhost';
const port = process.env.PORT || 8080;

const server = http.Server(app);
const io = socket(server);

// allow-cors
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use('/api', apiRouter);

// catch 404
app.use((req, res, next) => {
  res.status(404).send('Page Not Found!');
});

app.listen(port, () => {
  console.log(`Server is listening at http://${host}:${port}`);
});
