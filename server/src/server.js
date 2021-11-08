//  const dotenv = require('dotenv').config()
// TODO configure and write dotenv
const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger('dev'));  // development middleware
const cors = require("cors");
const helmet = require("helmet"); // express security


// const audience = process.env.AUTH0_AUDIENCE || 'https://express.sample';
// const domain = process.env.AUTH0_DOMAIN;
// const clientOriginUrl = process.env.CLIENT_ORIGIN_URL;
const { messagesRouter } = require("./messages/messages.router");
const { clientOrigins, port } = require("./config/env.dev");

// config from sample auth0 express project

const path = require('path'); 
// TODO set up path and routes
// const port = process.env.SERVER_PORT || '3001';
const router = require('./routes/index');
const apiRouter = express.Router();

app.use(express.static(path.join(__dirname, 'public')));
// TODO link to client app
app.use(helmet());
app.use(cors({ origin: clientOrigins }));
app.use(express.json()); // allows json to be consumed and created

app.use('/', router);

app.use("/api", apiRouter); // TODO square my routes with auth0's

apiRouter.use("/messages", messagesRouter);

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// }); //okay, i moved this process to server/src/routes


app.use(function (err, req, res, next) {
  // code from auth0 demo
  console.log(err);
  res.status(500).send(err.message);
});

// app.listen(port, () =>
//   console.log(`Example app listening at http://localhost:${port}`),
// );

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`),
);