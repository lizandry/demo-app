//  const dotenv = require('dotenv').config()
// TODO configure and write dotenv
const express = require('express');
const app = express();
// const port = process.env.PORT || '3001';

const logger = require('morgan');
const cors = require("cors");
const helmet = require("helmet"); // express security
const path = require('path'); 
// TODO set up path and routes
const router = require('./routes/index');

const { clientOrigins, port } = require("./config/env.dev");

app.use(logger('dev'));  // development middleware
app.use(express.static(path.join(__dirname, 'public')));
// TODO link to client app
app.use(helmet());
app.use(cors({ origin: clientOrigins }));
app.use(express.json()); // allows json to be consumed and created

app.use('/', router);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`),
);