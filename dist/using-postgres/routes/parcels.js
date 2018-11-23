"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _parcels = _interopRequireDefault(require("../controllers/parcels"));

var _Auth = _interopRequireDefault(require("../middleware/Auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)(); // api routes v1 (/api/v1)

router.get('/parcels', _Auth["default"].verifyToken, _parcels["default"].getAll);
router.get('/parcels/:parcelId', _Auth["default"].verifyToken, _parcels["default"].getOne);
router.post('/parcels', _Auth["default"].verifyToken, _parcels["default"].create);
router.put('/parcels/:parcelId/cancel', _Auth["default"].verifyToken, _parcels["default"].cancel);
router.put('/parcels/:parcelId/destination', _Auth["default"].verifyToken, _parcels["default"].changeDest);
router.put('/parcels/:parcelId/status', _Auth["default"].verifyToken, _parcels["default"].changeStatus);
router.put('/parcels/:parcelId/presentLocation', _Auth["default"].verifyToken, _parcels["default"].updatePL);
var _default = router;
exports["default"] = _default;