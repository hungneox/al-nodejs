const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const host = "localhost";
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

const apiRouter = require('./api/router');

app.use(apiRouter);

app.listen(port, () => {
  console.log(`Server is listening at http://${host}:${port}`);
});