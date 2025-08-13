import express from 'express';
import { registerForEvent, getAllRegistrations } from '../controllers/eventRegistrationController.js';

const router = express.Router();

router.post('/', registerForEvent);
router.get('/', getAllRegistrations); // Optional: only for admin/dashboard

export default router;
