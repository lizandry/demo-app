// import express from 'express';
const express = require('express');
// CURRENT working on using es6 with node


const app = express();

const port = 3001;
// TODO env

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () =>
  console.log(`app running on port {port}`),
);
