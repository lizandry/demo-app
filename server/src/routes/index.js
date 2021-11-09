require('dotenv').config()
const router = require('express').Router();
const { getPublicMessage, getProtectedMessage } = require("../messages/messages.services");
const { checkJwt } = require("../authz/check-jwt");

// const Database = require('../db')
// const dbName = process.env.DB_NAME || 'swear-jar';
// const db = new Database(dbName);
// // TODO set up db based on auth0

router.get('/', function (req, res) {
  // simple get request
  res.send('hello world');
}); 

router.get('/api/messages', function (req, res) {
  res.send('message route in auth0 code, too tired to delete rn');
}); 

router.get("/api/messages/public-message", (req, res) => {
  const message = getPublicMessage();
  res.status(200).send(message);
});

router.get("/api/messages/protected-message", checkJwt, (req, res) => {
  const message = getProtectedMessage();
  res.status(200).send(message);
});



// router.get('/api/users', (_unused, res, next) =>
// // sample retrieval from future db
//   db
//     .getAllUsers()
//     .then((users) => res.send(users))
//     .catch(next)
// );

module.exports = router;