"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = routes;

var _controllers = require("./controllers");

function routes(app) {
  app.get('/', function (req, res) {
    return res.send(200);
  });
  app.prefix('/user', function (user) {
    user.route('/').get(_controllers.UserController.getAll);
  });
}
//# sourceMappingURL=router.js.map