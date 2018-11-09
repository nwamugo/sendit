import { Router } from 'express';
import parcels from '../data/parcels-data';

const router = Router();

router.get('/:userId/parcels', (req, res) => {
  const userParcels = parcels.filter(parcel => parcel.userId === parseInt(req.params.userId, 10));
  if (!userParcels[0]) res.send('The are no parcels for this user.');

  res.send(userParcels);
});

export default router;
