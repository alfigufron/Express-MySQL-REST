import { Sequelize } from "sequelize";

import config from "../config";
import logger from "../util/logger";

const db = new Sequelize(config.DB.NAME, config.DB.USER, config.DB.PASSWORD, {
  host: config.DB.HOST,
  dialect: "mysql",
  logging: false,
});

async function connectionCheck() {
  return db
    .authenticate()
    .then(() => logger.info("Connection Database Successfully!"))
    .catch(err => logger.error(err.original));
}

export { db, connectionCheck };
