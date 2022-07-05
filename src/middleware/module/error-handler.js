import { AppConstant } from "../../constant";
import logger from "../../utils/logger";

const handleError = (err, req, res, next) => {
  if (res.headerSent) return next(err);

  let code = err.status || 500;

  const message = err.message || AppConstant.HTTP.MESSAGE.SERVER_ERROR;

  let errors = err.data ? err.data : null;
  if (message === AppConstant.HTTP.MESSAGE.VALIDATION_ERROR) {
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
    case "3":
      status = AppConstant.HTTP.STATUS.REDIRECTED;
      break;
    case "4":
      status = AppConstant.HTTP.STATUS.CLIENT_ERROR;
      break;
    case "5":
      status = AppConstant.HTTP.STATUS.SERVER_ERROR;
      break;
    default:
      status = AppConstant.HTTP.STATUS.UNKNOWN_ERROR;
  }

  if (["3", "4"].includes(head_code)) logger.warn(message);
  else logger.error(message);

  res.status(code).send({
    meta: { status, message, code },
    errors,
  });
};

export default handleError;
