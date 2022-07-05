import logger from "../../utils/logger";

const handleError = (err, req, res, next) => {
  if (res.headerSent) return next(err);

  let code = err.status || 500;

  const message = err.message || "Internal Server Error";

  let errors = err.data ? err.data : null;
  if (message === "Validation Error") {
    const arr_check = errors instanceof Array;

    if (!arr_check) errors = [errors];

    const result = [];
    let key = 0;
    const keys = {};

    errors.forEach(val => {
      const { param, msg } = val;

      if (param && msg) {
        if (!keys[param]) {
          keys[param] = 1;
          result[key] = msg;
          key += 1;
        }
      } else {
        result[key] = val;
        key += 1;
      }
    });

    errors = result;
  } else {
    errors = errors instanceof Array ? [errors] : errors;
  }

  const head_code = String(code).charAt(0);

  let status;
  switch (head_code) {
    case "2":
      status = "Success";
      break;
    case "3":
      status = "Redirected";
      break;
    case "4":
      status = "Client Error";
      break;
    case "5":
      status = "Server Error";
      break;
    default:
      status = "Unknown Error";
  }

  logger.warn(message);

  res.status(code).send({
    meta: { status, message, code },
    errors,
  });
};

export default handleError;
