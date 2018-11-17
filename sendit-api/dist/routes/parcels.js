"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _parcelsData = _interopRequireDefault(require("../data/parcels-data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)(); // HELPER functinos

function findParcel(parcel) {
  return _parcelsData["default"].find(function (p) {
    return p.parcelId === parseInt(parcel.parcelId, 10);
  });
} // api routes v1 (/api/v1)


router.get('/parcels', function (req, res) {
  res.status(200).send(_parcelsData["default"]);
});
router.get('/parcels/:parcelId', function (req, res) {
  var parcel = findParcel(req.params);
  if (!parcel) res.status(404).send('The parcel with the given ID was not found');
  res.status(200).send(parcel);
});
router.post('/parcels', function (req, res) {
  if (!req.body.destination) {
    res.status(400).send('Destination is required.');
    return;
  }

  var parcel = {
    parcelId: _parcelsData["default"].length + 1,
    userId: req.body.userId,
    pickupLocation: req.body.pickupLocation,
    destination: req.body.destination,
    price: req.body.price,
    status: 'Queue',
    presentLocation: req.body.pickupLocation
  };

  _parcelsData["default"].push(parcel);

  res.status(200).send(parcel);
});
router.put('/parcels/:parcelId/cancel', function (req, res) {
  var parcel = findParcel(req.params);
  if (!parcel) res.status(404).send('The parcel with the given ID was not found');
  parcel.cancel = true;
  parcel.status = 'Cancelled';
  res.send(parcel);
});
var _default = router;
exports["default"] = _default;