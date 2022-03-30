const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

module.exports = function routes(app) {
  // /////////////////////////
  // Middlewares instantiated
  app.use(cors());
  app.use(morgan("tiny"));
  app.use(bodyParser.json());
  app.use(express.urlencoded({ extended: true }));

  // ///////
  // Routes
  require("./home.routes")(app);

  // ////////////////////////////////////////
  // Redirection in case an url doesn't exist
  app.get("*", (_req, res) => {
    res.redirect("/");
  });
};
