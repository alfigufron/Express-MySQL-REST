import express from 'express';

import { User } from '../../controllers';
import { ExampleMiddleware } from '../../middleware';

const router = express.Router();

router.get('/', ExampleMiddleware, User.getAll);

export default router;