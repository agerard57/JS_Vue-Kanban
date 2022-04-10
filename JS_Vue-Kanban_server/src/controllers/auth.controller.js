const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt.config");
const UsersModel = require("../models/users.model");

// //////////////////
// Sign up controller
exports.signup = (req, res) => {
  const addOptions = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    username: req.body.username,
  };

  const user = new UsersModel(addOptions);

  user
    .save()
    .then((message) => {
      res.json(message);
    })
    .catch((error) => {
      return res.status(401).send(error);
    });
};

// //////////////////
// Log in controller
exports.login = (req, res) => {
  const username = req.body.username;
  UsersModel.findOne({ username: username }).exec(async (err, user) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (!user)
      return res.status(500).send({
        message: "User not found",
      });

    const isPasswordValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isPasswordValid)
      return res.status(401).send({
        accessToken: null,
        message: "Wrong password",
      });

    const token = jwt.sign({ username: user.username }, jwtConfig.KEY);

    res.status(200).send({
      username: user.username,
      email: user.email,
      accessToken: token,
    });
  });
};
