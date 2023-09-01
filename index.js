const express = require("express");
const { addMiddleware, start, setGetRoute } = require("./src/server");
const requestLogger = require("./src/middlewares/requestLogger");
const logger = require("./src/loggers");

function startup() {
  addMiddleware(express.json());
  addMiddleware(express.urlencoded());
  addMiddleware(requestLogger);

  setGetRoute("/health", function (req, res) {
    res.json({ status: "alive" });
  });

  start(process.env.PORT, () => {
    logger.info(`Starting server at ${process.env.PORT}`);
  });
}

startup();
