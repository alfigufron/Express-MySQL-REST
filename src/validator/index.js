import { validationResult } from "express-validator";
import { ErrorHandler } from "../config/http";
import UserValidator from "./module/user.validator";

function resultValidator(req, res, next) {
  const validated = validationResult(req);
  if (!validated.isEmpty())
    return next(new ErrorHandler("Validation Error", validated.errors, 422));

  return next();
}

export { resultValidator, UserValidator };
