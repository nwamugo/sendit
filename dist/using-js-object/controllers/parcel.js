// import { Router } from 'express';
// import ParcelModel from '../models/parcel';
// const router = Router();
// // api routes v1 (/api/v1)
// router.get('/parcels', (req, res) => {
//   const parcels = ParcelModel.findAllParcels();
//   if (parcels.length === 0) return res.send('No parcels were found.');
//   return res.status(200).send(parcels);
// });
// router.get('/parcels/:parcelId', (req, res) => {
//   const parcel = ParcelModel.findOneParcel(req.params.id);
//   if (!parcel) return res.status(404).send('The parcel with the given ID was not found');
//   return res.status(200).send(parcel);
// });
// router.post('/parcels', (req, res) => {
//   if (!req.body.destination && !req.body.pickupLocation && !req.body.price) {
//     return res.status(400).send('All fields are required.');
//   }
//   const parcel = ParcelModel.create(req.body);
//   return res.status(200).send(parcel);
// });
// router.put('/parcels/:parcelId/cancel', (req, res) => {
//   const parcel = ParcelModel.findOneParcel(req.params.id);
//   if (!parcel) res.status(404).send('Parcel not found');
//   const cancelledParcel = ParcelModel.cancelOrder(req.params.id);
//   return res.status(200).send(cancelledParcel);
// });
// export default router;
"use strict";