// backend/routes/bookingRoutes.js

import express from 'express';
import { createBooking, getBookingsByUser } from '../controllers/bookingController.js';

const router = express.Router();

router.post('/', createBooking);
router.get('/user/:userId', getBookingsByUser);

export default router;
