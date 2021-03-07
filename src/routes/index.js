import express from "express";

import userRouter from "./module/user";

const route = express.Router();

function router() {
  route.use("/user", userRouter());

  return route;
}

export default router;
