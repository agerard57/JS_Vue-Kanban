const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt.config");
const UsersModel = require("../models/users.model");
const RefreshTokenModel = require("../models/refreshToken.model");

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

    const token = jwt.sign({ username: user.username }, jwtConfig.KEY, {
      expiresIn: jwtConfig.jwtExpirationDelay,
    });

    const refreshToken = await RefreshTokenModel.createToken(user);

    res.status(200).send({
      username: user.username,
      email: user.email,
      accessToken: token,
      refreshToken: refreshToken,
    });
  });
};

exports.refreshToken = async (req, res) => {
  const { refreshToken: requestToken } = req.body;

  if (requestToken == null) {
    return res.status(403).json({ message: "Refresh Token is required!" });
  }

  try {
    let refreshToken = await RefreshTokenModel.findOne({
      token: requestToken,
    });

    if (!refreshToken) {
      res.status(403).json({ message: "Refresh token is not in database!" });
      return;
    }

    if (RefreshTokenModel.verifyExpiration(refreshToken)) {
      RefreshTokenModel.findByIdAndRemove(refreshToken._id, {
        useFindAndModify: false,
      }).exec();

      res.status(403).json({
        message: "Refresh token was expired. Please make a new login request",
      });
      return;
    }

    let newAccessToken = jwt.sign(
      { id: refreshToken.user._id },
      jwtConfig.KEY,
      {
        expiresIn: jwtConfig.jwtExpirationDelay,
      }
    );

    return res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: refreshToken.token,
    });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};
