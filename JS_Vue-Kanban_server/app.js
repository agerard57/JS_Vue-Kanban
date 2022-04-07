// Load the Required Modules
const express = require("express");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");

const getRoutes = require("./src/routes");

const app = express();

// Load the dotEnv lib and env vars declaration
dotEnv.config();

// Controllers or Routes
getRoutes(app);

// MongoDB Promise
const dbConfig = require("./src/config/db.config");
const consoleMessage = require("./src/utils/consoleMessage");
const server = mongoose.connect(
  `mongodb+srv://${dbConfig.USER}:${dbConfig.PWD}@${dbConfig.HOST}/${dbConfig.DB}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Setup server to start listening
const serverConfig = require("./src/config/server.config");
server.then(() => {
  app.listen(serverConfig.PORT, consoleMessage(serverConfig.PORT));
});

// Error checker for mongoose
const co = mongoose.connection;
co.on("error", console.error.bind(console, "MongoDB connection error:"));
