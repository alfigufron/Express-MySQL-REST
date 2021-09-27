import jwt from "jsonwebtoken";
import config from "../config";
import { ErrorHandler } from "../config/http";

const expTime = 3600; // Default 3600

async function generateToken(user) {
  try {
    return {
      token: jwt.sign({ user }, config.TOKEN.JWT, {
        algorithm: "HS256",
        expiresIn: expTime,
      }),
      expires_in: expTime,
    };
  } catch (err) {
    return err;
  }
}

async function verifyToken(token) {
  try {
    await jwt.verify(token, config.TOKEN.JWT);

    return true;
  } catch (err) {
    return false;
  }
}

async function getPayloadToken(token) {
  try {
    return await jwt.decode(token);
  } catch (err) {
    return err;
  }
}

async function JWTCheck(request) {
  try {
    const { authorization } = request.headers;

    if (!authorization) throw new ErrorHandler("Unauthenticated", 401);

    const token = authorization.split(" ")[1];

    if (!(await verifyToken(token)))
      throw new ErrorHandler("Unauthenticated", 401);

    return token;
  } catch (err) {
    throw new ErrorHandler(err.messae, err.status);
  }
}

export { generateToken, verifyToken, getPayloadToken, JWTCheck };
