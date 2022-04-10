const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt.config");

/**
 * This middleware will check if the user has a token when
 * accessing pages that are only accessible when logged in.
 */

module.exports = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }
  jwt.verify(token, jwtConfig.KEY, (err, _decrypted) => {
    if (err instanceof jwt.TokenExpiredError) {
      // Since I haven't implemented a refresh system,
      //I'll ask to automatically renew the token if it's expired
      return attemptRenewal();
    } else next();
  });
};
