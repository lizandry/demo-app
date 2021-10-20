require('dotenv').config()
const router = require('express').Router();
// const Database = require('../db')
// const dbName = process.env.DB_NAME || 'swear-jar';
// const db = new Database(dbName);
// // TODO set up db based on auth0

router.get('/', function (req, res) {
  // simple get request
  res.send('hello world');
}); 

// router.get('/api/users', (_unused, res, next) =>
// // sample retrieval from future db
//   db
//     .getAllUsers()
//     .then((users) => res.send(users))
//     .catch(next)
// );

module.exports = router;