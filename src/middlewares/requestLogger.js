const logger = require("../loggers");

function requestLogger(req, res, next) {
  logger.info({
    method: req.method,
    url: req.originalUrl,
    params: req.params,
    query: req.query,
    body: req.body,
    ip: req.ip,
  });

  next();
}

module.exports = requestLogger;
