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
    }
    if (user) {
      return res.status(403).send({
        message: "User already in use!",
      });
    }
  });
  next();
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
    }
    if (user) {
      return res.status(403).send({
        message: "Email already in use!",
      });
    }
  });
  next();
};

const checkUsername = (req, res, next) => {
  const username = req.body.username;
  const illegalChars = /\W/; // Not word - Allow only letters, numbers, and underscores
  if (username === "")
    return res.status(403).send({
      message: "Username is empty",
    });
  else if (username.length < 5 || username.length > 30)
    return res.status(403).send({
      message: "Username must be between 5 and 30 characters",
    });
  else if (illegalChars.test(username))
    return res.status(403).send({
      message: "Username has illegal characters",
    });
  else next();
};

const checkPassword = (req, res, next) => {
  const pwd = req.body.password;
  if (pwd === "")
    return res.status(403).send({
      message: "Password is empty",
    });
  else if (pwd.length < 5 || pwd.length > 30)
    return res.status(403).send({
      message: "Password must be between 5 and 30 characters",
    });
  else next();
};

const verifySignUp = {
  checkDuplicateUser,
  checkDuplicateEmail,
  checkUsername,
  checkPassword,
};

module.exports = verifySignUp;
