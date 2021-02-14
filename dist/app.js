"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _router = _interopRequireDefault(require("./router"));

var _middleware = require("./middleware");

// import { check } from './config/database';
// eslint-disable-next-line no-multi-assign, func-names
_express["default"].application.prefix = _express["default"].Router.prefix = function (path, configure) {
  var prefixRouter = _express["default"].Router();

  this.use(path, prefixRouter);
  configure(prefixRouter);
  return prefixRouter;
};

var app = (0, _express["default"])();
var port = 3000; // check();

app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_middleware.ExampleMiddleware);
(0, _router["default"])(app);
app.listen(process.env.PORT || port, function () {
  return console.log("\nServer Running at http://localhost:".concat(port, "/ or http://127.0.0.1:").concat(port, "/"));
});
//# sourceMappingURL=app.js.map