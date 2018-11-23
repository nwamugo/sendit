"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Helper = {
  hashPassword: function () {
    function hashPassword(password) {
      return _bcrypt["default"].hashSync(password, _bcrypt["default"].genSaltSync(8));
    }

    return hashPassword;
  }(),
  comparePassword: function () {
    function comparePassword(hashPassword, password) {
      return _bcrypt["default"].compareSync(password, hashPassword);
    }

    return comparePassword;
  }(),
  isValidEmail: function () {
    function isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    }

    return isValidEmail;
  }(),
  generateToken: function () {
    function generateToken(id) {
      var token = _jsonwebtoken["default"].sign({
        userId: id
      }, process.env.SECRET, {
        expiresIn: '3d'
      });

      return token;
    }

    return generateToken;
  }()
};
var _default = Helper;
exports["default"] = _default;