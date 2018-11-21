import { Router } from 'express';
import Parcels from '../controllers/parcels';

const router = Router();


// api routes v1 (/api/v1)
router.get('/parcels', Parcels.getAll);

router.get('/parcels/:parcelId', Parcels.getOne);

router.post('/parcels', Parcels.create);

router.put('/parcels/:parcelId/cancel', Parcels.cancel);

router.put('/parcels/:parcelId/destination', Parcels.changeDest);

router.put('/parcels/:parcelId/status', Parcels.changeStatus);

router.put('/parcels/:parcelId/presentLocation', Parcels.updatePL);

export default router;
