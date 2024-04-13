import * as e from 'express';

// Routes
import { default as Interview } from './Interview';
import { default as User } from './User';

const router = e.Router();
router.use(Interview);
router.use(User);

export default router;