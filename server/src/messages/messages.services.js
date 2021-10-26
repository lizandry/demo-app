/**
 * Service Methods pulled from https://github.com/auth0-blog/auth0-express-js-sample/blob/main/src/messages/messages.service.js
 */

 const getPublicMessage = () => {
  return {
    message: "The API doesn't require an access token to share this message.",
  };
};

const getProtectedMessage = () => {
  return {
    message: "The API successfully validated your access token.",
  };
};

module.exports = {
  getPublicMessage,
  getProtectedMessage,
};