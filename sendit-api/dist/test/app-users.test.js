"use strict";

var _chai = require("chai");

var _supertest = _interopRequireDefault(require("supertest"));

var _ = _interopRequireDefault(require(".."));

var _parcelsData = _interopRequireDefault(require("../data/parcels-data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var api = (0, _supertest["default"])(_["default"]);
describe('GET /users/:userId/parcels', function () {
  it('should fetch all parcel delivery orders by a specific user', function (done) {
    api.get("/api/v1/users/".concat(_parcelsData["default"][0].userId, "/parcels")).set('Accept', 'application/json').expect(200).end(function (err, res) {
      (0, _chai.expect)(res.body[0].userId).to.equal(_parcelsData["default"][0].userId);
      done();
    });
  });
});