"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.check = exports.db = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _sequelize = require("sequelize");

var development = {
  user: 'root',
  pass: '',
  host: '127.0.0.1',
  db: ''
},
    production = {
  user: '',
  pass: '',
  host: '',
  db: ''
},
    db = new _sequelize.Sequelize(development.db, development.user, development.pass, {
  host: development.host,
  dialect: 'mysql',
  logging: false
}),
    check = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.clear();
            _context.prev = 1;
            _context.next = 4;
            return db.authenticate();

          case 4:
            console.log('\nConnect Database Successfully!\n');
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            db.close();
            console.log("\nConnect Database Error!\n".concat(_context.t0, "\n"));

          case 11:
            ;

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 7]]);
  }));

  return function check() {
    return _ref.apply(this, arguments);
  };
}();

exports.check = check;
exports.db = db;
//# sourceMappingURL=database.js.map