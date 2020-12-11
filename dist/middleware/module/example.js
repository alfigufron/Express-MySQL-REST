"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = example;

function example(req, res, next) {
  console.log("Request : ".concat(req.method));
  console.log("URL : ".concat(req.originalUrl));
  return next();
}
//# sourceMappingURL=example.js.map