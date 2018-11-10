import { expect } from 'chai';
import supertest from 'supertest';
import app from '..';

import parcels from '../data/parcels-data';

const api = supertest(app);

describe('GET /users/:userId/parcels', () => {
  it('should fetch all parcel delivery orders by a specific user', (done) => {
    api.get(`/api/v1/users/${parcels[0].userId}/parcels`)
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        expect(res.body[0].userId).to.equal(parcels[0].userId);
        done();
      });
  });
});
