/**
 * Required External Modules and Interfaces, pulled from https://github.com/auth0-blog/auth0-express-js-sample/blob/main/src/messages/messages.router.js
 */

 const express = require("express");
 const { getPublicMessage, getProtectedMessage } = require("./messages.services");
 const { checkJwt } = require("../authz/check-jwt");
 
 /**
  * Router Definition
  */
 
 const messagesRouter = express.Router();
 
 /**
  * Controller Definitions
  */
 
 // GET messages/
 
 messagesRouter.get("/public-message", (req, res) => {
   const message = getPublicMessage();
   res.status(200).send(message);
 });
 
 messagesRouter.get("/protected-message", checkJwt, (req, res) => {
   const message = getProtectedMessage();
   res.status(200).send(message);
 });
 
 module.exports = {
   messagesRouter,
 };