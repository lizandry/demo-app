require('dotenv').config()
// TODO configure and write dotenv
const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger('dev'));  // development middleware

const path = require('path'); 
// TODO set up path and routes
const port = process.env.PORT || '3001';
const router = require('./routes/index');


app.use(express.static(path.join(__dirname, 'public')));
// TODO link to client app
app.use(express.json()); // allows json to be consumed and created

app.use('/', router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`),
);
