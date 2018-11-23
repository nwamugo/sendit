// import { expect } from 'chai';
// import supertest from 'supertest';
// import app from '../..';




// const api = supertest(app);

// describe('User test', () => {
//   after(() => app.server.close());
//   describe('GET /users/:userId/parcels', () => {
//     it('should fetch all parcel delivery orders by a specific user', (done) => {
//       api.get(`/api/v1/users/${parcels[0].userId}/parcels`)
//         .set('Accept', 'application/json')
//         .expect(200)
//         .end((err, res) => {
//           expect(res.body[0].userId).to.equal(parcels[0].userId);
//           done();
//         });
//     });
//   });

//   describe('GET /users/:userId/:parcelId/', () => {
//     it('should fetch a specific parcel belonging to the user', (done) => {
//       api.get(`/api/v1/users/${parcels[0].userId}/${parcels[0].parcelId}`)
//         .set('Accept', 'application/json')
//         .expect(200)
//         .end((err, res) => {
//           expect(res.body.userId).to.equal(parcels[0].userId);
//           done();
//         });
//     });
//   });
// });
