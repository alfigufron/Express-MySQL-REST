import express from "express";

import userRouter from "./module/user";

const route = express.Router();

export default function router() {
  route.use("/user", userRouter());

  return route;
}
