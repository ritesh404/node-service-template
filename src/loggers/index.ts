import winston from "winston";

const logger = winston.createLogger({
  level: "info", // Adjust log level as needed
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(), // Log to console
    // new winston.transports.File({ filename: "logs/combined.log" }), // Log to file
  ],
});

export default logger;
