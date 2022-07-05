import winston from "winston";

import { datetimeLog } from "./datetime";

const logger = winston.createLogger({
  level: "debug",
  transports: [
    new winston.transports.File({
      name: "app-log",
      filename: "./logs/app.log",
      json: false,
    }),

    new winston.transports.File({
      name: "error-log",
      filename: "./logs/error.log",
      level: "error",
      json: false,
    }),

    new winston.transports.Console(),
  ],
  format: winston.format.combine(
    winston.format.colorize({ all: true }),

    winston.format.printf(log => {
      const timestamp = datetimeLog();
      const { level } = log;
      let { message } = log;

      const resLog = `${timestamp} [${level}] : `;

      if (log.meta) {
        const { url, ip } = log.meta;

        if (url) message = `[${message}] ${url}`;
        if (ip) message = `${ip} | ${message}`;
      }

      return resLog + message;
    })
  ),
});

export default logger;
