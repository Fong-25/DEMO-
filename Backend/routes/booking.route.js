import express from 'express';
import { create, get } from '../controllers/booking.controller.js';

import { isAuth, isAdmin } from '../controllers/auth.controller.js'

const router = express.Router();

router.post('/booking', create)
router.get("/", isAdmin, get)

export default router;