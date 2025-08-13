// backend/controllers/bookingController.js

import asyncHandler from 'express-async-handler';
import Booking from '../models/bookingModel.js';

// @desc    Create a new booking
// @route   POST /api/bookings
// @access  Private
// backend/controllers/bookingController.js

const createBooking = asyncHandler(async (req, res) => {
    const { event, user, date } = req.body;
  
    if (!event || !user || !date) {
      res.status(400);
      throw new Error('Please provide event, user, and date');
    }
  
    const booking = await Booking.create({
      event,
      user,
      date,
    });
  
    res.status(201).json(booking);
  });

  const getBookingsByUser = asyncHandler(async (req, res) => {
    const userId = req.params.userId;
  
    const bookings = await Booking.find({ user: userId }).populate('event');
  
    if (!bookings) {
      res.status(404);
      throw new Error('No bookings found for this user');
    }
  
    res.status(200).json(bookings);
  });
  

export { createBooking, getBookingsByUser };
