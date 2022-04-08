const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt.config");

const { TokenExpiredError } = jwt;

const catchError = (err, res) => {
  if (err instanceof TokenExpiredError) {
    return res
      .status(401)
      .send({ message: "Unauthorized! Access Token was expired!" });
  }

  return res.status(401).send({ message: "Unauthorized!" });
};

module.exports = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }
  jwt.verify(token, jwtConfig.KEY, (err, decrypted) => {
    if (err) {
      return catchError(err, res);
    }
    req.userId = decrypted.id;
    next();
  });
};
