// import { Router } from 'express';
// import parcels from '../data/parcels-data';
// const router = Router();
// function findParcel(parcel) {
//   return parcels.find(p => p.parcelId === parseInt(parcel.parcelId, 10));
// }
// router.get('/:userId/parcels', (req, res) => {
//   const userParcels = parcels.filter(parcel => parcel.userId === parseInt(req.params.userId, 10));
//   if (!userParcels[0]) res.send('The are no parcels for this user.');
//   res.send(userParcels);
// });
// router.get('/:userId/:parcelId', (req, res) => {
//   const theParcel = findParcel(req.params);
//   if (!theParcel || theParcel.userId !== parseInt(req.params.userId, 10)) res.status(404).send('The parcel was not found');
//   else if (theParcel.userId === parseInt(req.params.userId, 10)) res.status(200).send(theParcel);
// });
// export default router;
"use strict";