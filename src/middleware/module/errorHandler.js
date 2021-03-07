import logger from "../../util/logger";

const handleError = (err, req, res, next) => {
  if (res.headerSent) return next(err);

  const msg = err.status ? err.message : "Internal Server Error";

  logger.error(msg);

  res.status(err.status ? err.status : 500).send({
    message: msg,
  });
};

export default handleError;
