// backend/routes/eventRoutes.js
import express from 'express';
import {
  createEvent,
  getAllEvents,
  getEventById,
  deleteEvent,
  updateEvent,
} from '../controllers/eventController.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getAllEvents).post(protect, createEvent);
router
  .route('/:id')
  .get(getEventById)
  .put(protect, updateEvent)
  .delete(protect, isAdmin, deleteEvent);

export default router;
