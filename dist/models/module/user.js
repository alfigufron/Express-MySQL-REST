"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../../config/database");

var DataTypes = _sequelize["default"].DataTypes;

var Model = _database.db.define('User', {
  columnName: DataTypes.STRING(),
  allowNull: false
}, {
  tableName: 'tableName'
});

var _default = Model;
exports["default"] = _default;
//# sourceMappingURL=User.js.map