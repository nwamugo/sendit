// import { Router } from 'express';
// import parcels from '../data/parcels-data';

// const router = Router();

// // HELPER functions
// function findParcel(parcel) {
//   return parcels.find(p => p.parcelId === parseInt(parcel.parcelId, 10));
// }

// function createId() {
//   const lastIndex = parcels.length - 1;
//   const gettingId = parcels[lastIndex].parcelId;
//   const newId = gettingId + 1;

//   return newId;
// }


// // api routes v1 (/api/v1)
// router.get('/parcels', (req, res) => {
//   if (parcels === []) res.send('No parcels were found.');
//   res.status(200).send(parcels);
// });

// router.get('/parcels/:parcelId', (req, res) => {
//   const parcel = findParcel(req.params);
//   if (!parcel) res.status(404).send('The parcel with the given ID was not found');
//   res.status(200).send(parcel);
// });

// router.post('/parcels', (req, res) => {
//   if (!req.body.destination) {
//     res.status(400).send('Destination is required.');
//     return;
//   }
//   const parcel = {
//     parcelId: createId(),
//     userId: req.body.userId,
//     pickupLocation: req.body.pickupLocation,
//     destination: req.body.destination,
//     price: req.body.price,
//     status: 'Queue',
//     presentLocation: req.body.pickupLocation,
//   };
//   parcels.push(parcel);
//   res.status(200).send(parcel);
// });


// router.put('/parcels/:parcelId/cancel', (req, res) => {
//   const parcel = findParcel(req.params);
//   if (!parcel) res.status(404).send('The parcel with the given ID was not found');

//   parcel.cancel = true;
//   parcel.status = 'Cancelled';
//   res.send(parcel);
// });

// export default router;
