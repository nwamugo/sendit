import { Router } from 'express';
import User from '../controllers/user';

const router = Router();


// api routes v1 (/api/v1)
router.get('/users/:userId/parcels', User.getAll);


export default router;
