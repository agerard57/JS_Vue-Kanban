const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt.config");

module.exports = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }
  console.log({ tokenPassed: token, jwtKey: jwtConfig.KEY });
  jwt.verify(token, jwtConfig.KEY, (err, _decrypted) => {
    if (err instanceof jwt.TokenExpiredError) {
      return attemptRenewal();
    } else next();
  });
};
