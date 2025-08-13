import asyncHandler from 'express-async-handler';
import EventRegistration from '../models/eventRegistrationModel.js';

// @desc Register for an event
// @route POST /api/event-registrations
// @access Public
const registerForEvent = asyncHandler(async (req, res) => {
  const { name, email, phone, company, eventId } = req.body;

  if (!name || !email || !eventId) {
    res.status(400);
    throw new Error('Name, email, and event ID are required.');
  }

  const registration = await EventRegistration.create({
    name,
    email,
    phone,
    company,
    eventId,
  });

  res.status(201).json(registration);
});

// Optional: Get all registrations
const getAllRegistrations = asyncHandler(async (req, res) => {
  const registrations = await EventRegistration.find().populate('eventId', 'title date');
  res.json(registrations);
});

export { registerForEvent, getAllRegistrations };
