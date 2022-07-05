import logger from "../../utils/logger";
import { urlFormatter } from "../../config/http";

const handleError = (req, res, next) => {
  const url = urlFormatter(req);
  const ip =
    req.headers["x-forwarded-for"]?.split(",").shift() ||
    req.socket?.remoteAddress;

  logger.info({ message: req.method, meta: { url, ip } });

  next();
};

export default handleError;
