import { Router } from 'express';
import Parcels from '../controllers/parcels';
import Auth from '../middleware/auth';

const router = Router();


// api routes v1 (/api/v1)
router.get('/parcels', Auth.verifyToken, Parcels.getAll);

router.get('/parcels/:parcelId', Auth.verifyToken, Parcels.getOne);

router.post('/parcels', Auth.verifyToken, Parcels.create);

router.put('/parcels/:parcelId/cancel', Auth.verifyToken, Parcels.cancel);

router.put('/parcels/:parcelId/destination', Auth.verifyToken, Parcels.changeDest);

router.put('/parcels/:parcelId/status', Auth.verifyToken, Parcels.changeStatus);

router.put('/parcels/:parcelId/presentLocation', Auth.verifyToken, Parcels.updatePL);

export default router;
