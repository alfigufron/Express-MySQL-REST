import { Sequelize } from "sequelize";

import config from "../config";
import logger from "../utils/logger";

const db = new Sequelize(config.DB.NAME, config.DB.USER, config.DB.PASSWORD, {
  host: config.DB.HOST,
  port: config.DB.PORT,
  dialect: "mysql",
  logging: false,
  pool: {
    max: 6,
    min: 0,
    idle: 20000,
  },
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

function offsetPagination(page, limit) {
  return page < 1 ? 0 : Number(page - 1) * Number(limit);
}

function pagination(data, current_page = 1, limit = 10) {
  const total_page = Math.ceil(data.count / Number(limit));
  const total_records = data.count;
  const records = data.rows;

  return {
    current_page: Number(current_page),
    total_page,
    total_records,
    records,
  };
}

export {
  db,
  connectionCheck,
  dbTransaction,
  updateOrCreate,
  offsetPagination,
  pagination,
};
