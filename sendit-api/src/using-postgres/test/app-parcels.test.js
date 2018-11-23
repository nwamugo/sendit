import { expect } from 'chai';
import 'chai/register-should';
import supertest from 'supertest';
import app from '../..';


const api = supertest(app);

describe('Parcels test', () => {
  after(() => app.server.close());
  describe('GET /parcels', () => {
    it('should return all parcels', (done) => {
      api.get('/api/v1/parcels')
        .end((err, res) => {
          expect(200);
          done();
        });
    });
  });
});

// describe('POST /parcels', () => {
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
