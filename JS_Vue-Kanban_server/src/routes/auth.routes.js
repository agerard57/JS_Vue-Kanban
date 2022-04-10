const authController = require("../controllers/auth.controller");
const { verifySignUp } = require("../middlewares");

module.exports = function (app) {
  app.use(function (_req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // POST new user
  app.post(
    "/signup",
    [
      verifySignUp.checkDuplicateUser,
      verifySignUp.checkDuplicateEmail,
      verifySignUp.checkUsername,
    ],
    authController.signup
  );

  // POST login user
  app.post("/login", authController.login);
};
