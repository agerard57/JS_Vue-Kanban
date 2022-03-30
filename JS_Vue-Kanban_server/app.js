// Load the Required Modules
const express = require("express");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");

const getRoutes = require("./src/routes");
const normalizePort = require("./src/utils/normalizePort");

const app = express();

// Load the dotEnv lib and env vars declaration
dotEnv.config();

// Port declaration
const port = normalizePort(process.env.PORT);

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
server.then(() => {
  app.listen(port, consoleMessage(port));
});

// Error checker for mongoose
const co = mongoose.connection;
co.on("error", console.error.bind(console, "MongoDB connection error:"));
