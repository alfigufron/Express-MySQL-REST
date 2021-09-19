import { Sequelize } from "sequelize";

import config from "../config";
import logger from "../utils/logger";

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

function dbTransaction() {
  const transaction = db.transaction();

  return transaction;
}

async function updateOrCreate(model, where, payload, transaction = null) {
  const result = await model.findOne({ where }).then(data => {
    if (data) return data.update(payload, { transaction });

    return model.create(payload, { transaction });
  });

  return result;
}

function pagination(data, current_page) {
  const { docs: records, pages: total_page, total: total_records } = data;
  current_page = Number(current_page);

  return {
    current_page,
    total_page,
    total_records,
    records,
  };
}

export { db, connectionCheck, dbTransaction, updateOrCreate, pagination };
