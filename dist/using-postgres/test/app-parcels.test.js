"use strict";

var _chai = require("chai");

require("chai/register-should");

var _supertest = _interopRequireDefault(require("supertest"));

var _ = _interopRequireDefault(require("../.."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var api = (0, _supertest["default"])(_["default"]);
describe('Parcels test', function () {
  after(function () {
    return _["default"].server.close();
  });
  describe('GET /parcels', function () {
    it('should return all parcels', function (done) {
      api.get('/api/v1/parcels').end(function (err, res) {
        (0, _chai.expect)(200);
        done();
      });
    });
  });
}); // describe('POST /parcels', () => {
//   before((done) => {
//   });
//   after((done) => {
//   });
//   it('should return a 200 response', (done) => {
//     api.post('/api/v1/parcels')
//       .send({
//         userId: 555,
//         pickupLocation: 'Adamawa',
//         destination: 'Sokoto',
//         price: 4500,
//         presentLocation: 'Adamawa',
//       })
//       .expect(200)
//       .end(done);
//   });
// });
// describe('GET /parcels/:parcelId', () => {
//   it('should return a specific parcel', (done) => {
//     api.get(`/api/v1/parcels/${parcels[0].parcelId}`)
//       .set('Accept', 'application/json')
//       .expect(200)
//       .end((err, res) => {
//         expect(res.body.parcelId).to.equal(parcels[0].parcelId);
//         done();
//       });
//   });
// });
// describe('PUT /parcels/:parcelId/cancel', () => {
//   it('should cancel a parcel delivery order', (done) => {
//     api.put(`/api/v1/parcels/${parcels[0].parcelId}/cancel`)
//       .send({
//         cancel: true,
//         status: 'Cancelled',
//       })
//       .expect(200)
//       .end((err, res) => {
//         expect(res.body.cancel).to.equal(true);
//         expect(res.body.status).to.equal('Cancelled');
//         done();
//       });
//   });
//   });
// });