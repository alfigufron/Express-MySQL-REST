import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";

import logger from "./utils/logger";
import router from "./routes";
import config from "./config";
import { errorHandler, requestHandler } from "./middleware";
import { connectionCheck } from "./database";

const app = express();
const port = config.APP.PORT;

async function startServer() {
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

  app.use(cors());
  app.use(helmet());

  app.use(express.static(`public`));

  app.use(requestHandler);
  app.use("/api", router());
  app.use((req, res) => {
    res.status(404).send({ message: "Not Found" });
  });
  app.use(errorHandler);

  app.listen(port, () => {
    console.clear();
    logger.info(
      `Server Running at http://localhost:${port}/ or http://127.0.0.1:${port}/`
    );
    logger.info(
      `${config.APP.MODE === "PROD" ? "Production" : "Development"} Mode`
    );
  });

  connectionCheck();
}

startServer();

export default app;
