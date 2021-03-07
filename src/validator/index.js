import { validationResult } from "express-validator";
import { ErrorHandler } from "../config/http";
import UserValidator from "./module/userValidator";

function resultValidator(req, res, next) {
  const validated = validationResult(req);
  if (!validated.isEmpty())
    return next(new ErrorHandler(validated.errors[0].msg, 422));

  return next();
}

export { resultValidator, UserValidator };
