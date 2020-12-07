"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = routes;

var _user = _interopRequireDefault(require("./routes/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function routes(app) {
  app.use('/user', _user["default"]);
}