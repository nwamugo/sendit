"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Auth = {
  verifyToken: function () {
    async function verifyToken(req, res, next) {
      var token = req.headers['x-access-token'];

      if (!token) {
        return res.status(400).send({
          message: 'Token is not provided'
        });
      }

      try {
        var decoded = await _jsonwebtoken["default"].verify(token, process.env.SECRET);
        req.user = {
          id: decoded.userId
        };
        next();
      } catch (error) {
        return res.status(400).send(error);
      }
    }

    return verifyToken;
  }()
};
var _default = Auth;
exports["default"] = _default;