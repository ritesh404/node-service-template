import express from "express";
import { addMiddleware, start, setGetRoute } from "./src/server";
import requestLogger from "./src/middlewares/requestLogger";
import logger from "./src/loggers";
import errorLogger from "./src/middlewares/errorLogger";

function startup() {
  addMiddleware(express.json());
  addMiddleware(express.urlencoded());
  addMiddleware(requestLogger);
  addMiddleware(errorLogger);

  setGetRoute("/health", function (req, res) {
    res.json({ status: "alive" });
  });

  if (!process.env.PORT) throw Error("PORT is missing");
  else
    start(Number(process.env.PORT), () => {
      logger.info(`Starting server at ${process.env.PORT}`);
    });
}

startup();
