"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = routes;

var _user = _interopRequireDefault(require("./routes/user"));

function routes(app) {
  app.use('/user', _user["default"]);
}
//# sourceMappingURL=router.js.map