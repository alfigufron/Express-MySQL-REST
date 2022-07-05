import url from "url";
import logger from "../utils/logger";

class ErrorHandler extends Error {
  constructor(message, data = null, status = 400) {
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

function httpResponse(response, message, data = null, code = 200) {
  logger.info(message);

  const result = {
    meta: {
      status: "success",
      message,
      code,
    },
  };

  if (data) result.data = data;

  return response.status(code).send(result);
}

export { urlFormatter, httpResponse, ErrorHandler };
