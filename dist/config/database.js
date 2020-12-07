"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.check = exports.db = void 0;

var _sequelize = require("sequelize");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var development = {
  user: 'root',
  pass: 'pass1903',
  host: '127.0.0.1',
  db: 'school-web-app'
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
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
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