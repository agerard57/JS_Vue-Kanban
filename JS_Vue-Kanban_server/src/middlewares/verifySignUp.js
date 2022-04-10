const UsersModel = require("../models/users.model");

const checkDuplicateUser = (req, res, next) => {
  const username = req.body.username;
  UsersModel.findOne({
    username: username,
  }).exec((err, user) => {
    if (err) {
      return res.status(500).send({
        message: "ERROR",
      });
    } else if (user) {
      return res.status(403).send({
        message: "Username already in use!",
      });
    } else next();
  });
};

const checkDuplicateEmail = (req, res, next) => {
  const email = req.body.email;
  UsersModel.findOne({
    email: email,
  }).exec((err, user) => {
    if (err) {
      return res.status(500).send({
        message: "ERROR",
      });
    } else if (user) {
      return res.status(400).send({
        message: "Email already in use!",
      });
    } else next();
  });
};

const checkUsername = (req, res, next) => {
  const username = req.body.username;
  // Only allows letters, numbers, and underscores
  const illegalChars = /\W/;
  if (illegalChars.test(username))
    return res.status(403).send({
      message: "Username has illegal characters",
    });
  else next();
};

const verifySignUp = {
  checkDuplicateUser,
  checkDuplicateEmail,
  checkUsername,
};

module.exports = verifySignUp;
