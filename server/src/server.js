import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import socket from 'socket.io';
import apiRouter from './api';

const app = express();

const host = 'localhost';
const port = process.env.PORT || 8080;

const server = http.Server(app);
const io = socket(server);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

// allow-cors
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(apiRouter);

// catch 404
app.use((req, res, next) => {
  res.status(404).send('Page Not Found!');
});

app.listen(port, () => {
  console.log(`Server is listening at http://${host}:${port}`);
});
