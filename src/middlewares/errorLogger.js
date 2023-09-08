const logger = require("../loggers");

function errorLogger(err, req, res, next) {
  logger.error({
    stack: err.stack,
    message: err.message,
    code: err.code,
  });

  next();
}

module.exports = errorLogger;
