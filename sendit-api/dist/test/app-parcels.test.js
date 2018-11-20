"use strict";

var _chai = require("chai");

var _supertest = _interopRequireDefault(require("supertest"));

var _ = _interopRequireDefault(require(".."));

var _parcelsData = _interopRequireDefault(require("../data/parcels-data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var api = (0, _supertest["default"])(_["default"]);
describe('POST /parcels', function () {
  it('should return a 200 response', function (done) {
    api.post('/api/v1/parcels').send({
      userId: 555,
      pickupLocation: 'Adamawa',
      destination: 'Sokoto',
      price: 4500,
      presentLocation: 'Adamawa'
    }).expect(200).end(done);
  });
});
describe('GET /parcels', function () {
  it('should fetch all parcels', function (done) {
    api.get('/api/v1/parcels').set('Accept', 'application/json').expect(200).end(done);
  });
});
describe('GET /parcels/:parcelId', function () {
  it('should return a specific parcel', function (done) {
    api.get("/api/v1/parcels/".concat(_parcelsData["default"][0].parcelId)).set('Accept', 'application/json').expect(200).end(function (err, res) {
      (0, _chai.expect)(res.body.parcelId).to.equal(_parcelsData["default"][0].parcelId);
      done();
    });
  });
});
describe('PUT /parcels/:parcelId/cancel', function () {
  it('should cancel a parcel delivery order', function (done) {
    api.put("/api/v1/parcels/".concat(_parcelsData["default"][0].parcelId, "/cancel")).send({
      cancel: true,
      status: 'Cancelled'
    }).expect(200).end(function (err, res) {
      (0, _chai.expect)(res.body.cancel).to.equal(true);
      (0, _chai.expect)(res.body.status).to.equal('Cancelled');
      done();
    });
  });
});