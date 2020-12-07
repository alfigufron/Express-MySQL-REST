"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../../config/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DataTypes = _sequelize["default"].DataTypes,
    Model = _database.db.define('User', {
  columnName: DataTypes.STRING(),
  allowNull: false
}, {
  tableName: 'tableName'
});

var _default = Model;
exports["default"] = _default;