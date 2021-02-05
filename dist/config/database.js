"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.check = check;
exports.db = void 0;

var _sequelize = require("sequelize");

var development = {
  user: 'root',
  pass: 'pass1234',
  host: '127.0.0.1',
  db: 'crud-laravel-api'
}; // const production = {
//   user: '',
//   pass: '',
//   host: '',
//   db: '',
// };

var db = new _sequelize.Sequelize(development.db, development.user, development.pass, {
  host: development.host,
  dialect: 'mysql',
  logging: false
});
exports.db = db;

function check() {
  console.clear();

  try {
    db.authenticate();
    console.log('\nConnect Database Successfully!\n');
  } catch (e) {
    db.close();
    console.log("\nConnect Database Error!\n".concat(e, "\n"));
  }
}
//# sourceMappingURL=database.js.map