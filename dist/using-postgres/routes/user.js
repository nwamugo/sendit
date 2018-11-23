"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _user = _interopRequireDefault(require("../controllers/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
console.log(_user["default"].signup); // api routes v1 (/api/v1)

router.get('/:userId/parcels', _user["default"].getAll);
router.post('/signup', _user["default"].signup);
router.post('/login', _user["default"].login);
var _default = router;
exports["default"] = _default;