"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _parcelsData = _interopRequireDefault(require("../data/parcels-data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.get('/:userId/parcels', function (req, res) {
  var userParcels = _parcelsData["default"].filter(function (parcel) {
    return parcel.userId === parseInt(req.params.userId, 10);
  });

  if (!userParcels[0]) res.send('The are no parcels for this user.');
  res.send(userParcels);
});
var _default = router;
exports["default"] = _default;