import expect from 'expect';
import supertest from 'supertest';
import app from '../index';

import parcels from '../data/parcels-data';


describe('GET /parcels', () => {
  it('should fetch all parcels', (done) => {
    supertest(app)
      .get('/parcels')
      .expect(200)
      .end(done);
  });

  it('should fetch a specific parcel delivery order', (done) => {
    supertest(app)
      .get(`/parcels/${parcels[0].parcelId}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.parcel.destination).toBe(parcels[0].destination);
      })
      .end(done);
  });
});


describe('POST /parcels', () => {
  it('should create a new delivery order', (done) => {
    const parcel = { destination: 'Owerri' };
    supertest(app)
      .post('/parcels')
      .send(parcel)
      .expect(200)
      .expect((res) => {
        expect(res.body.destination).toBe('Owerri');
      })
      .end(done);
  });
});
