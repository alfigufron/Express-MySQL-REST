import express from 'express';
import { User } from '../../controllers';

const router = express.Router();

router.get('/', User.getAll);

export default router;