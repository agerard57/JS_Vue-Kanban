const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt.config");

module.exports = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }
  jwt.verify(token, jwtConfig.KEY, (err, decrypted) => {
    if (err) {
      return res.status(401).send({
        message: "Wrong token provided!",
      });
    }
    next();
  });
};
