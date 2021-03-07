import url from "url";
import logger from "../util/logger";

class ErrorHandler extends Error {
  constructor(message, status, data) {
    super();
    this.message = message;
    this.status = status;
    this.data = data;
  }
}

function urlFormatter(request) {
  return url.format({
    protocol: request.protocol,
    host: request.get("host"),
    pathname: request.originalUrl,
  });
}

function httpSuccess(response, message, status = 200) {
  logger.info(message);

  return response.status(status).send({
    message,
  });
}

function httpSuccessWithData(response, message, data, status = 200) {
  logger.info(message);

  return response.status(status).send({
    message,
    data,
  });
}

export { urlFormatter, httpSuccess, httpSuccessWithData, ErrorHandler };
