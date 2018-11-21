import { Router } from 'express';
import User from '../controllers/user';

const router = Router();


// api routes v1 (/api/v1)
router.get('/users/:userId/parcels', User.getAll);

router.post('/auth/signup', User.signup);

router.post('/auth/login', User.login);


export default router;
