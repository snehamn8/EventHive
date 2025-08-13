// backend/controllers/eventController.js
import asyncHandler from 'express-async-handler';
import Event from '../models/eventModel.js';

// @desc    Create a new event
// @route   POST /api/events
// @access  Private
export const createEvent = asyncHandler(async (req, res) => {
  const { title, description, date, time, location, image } = req.body;

  if (!title || !description || !date || !time || !location) {
    res.status(400);
    throw new Error('All fields (title, description, date, time, location) are required');
  }

  const event = await Event.create({
    title,
    description,
    date,
    time,
    location,
    image,
    createdBy: req.user._id,
  });

  res.status(201).json(event);
});

// @desc    Get all events
export const getAllEvents = asyncHandler(async (req, res) => {
  const events = await Event.find().sort({ date: 1 });
  res.json(events);
});

// @desc    Get event by ID
export const getEventById = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (event) {
    res.json(event);
  } else {
    res.status(404);
    throw new Error('Event not found');
  }
});

// @desc    Update event
export const updateEvent = asyncHandler(async (req, res) => {
  const { title, description, date, time, location, image } = req.body;
  const event = await Event.findById(req.params.id);

  if (event) {
    event.title = title || event.title;
    event.description = description || event.description;
    event.date = date || event.date;
    event.time = time || event.time;
    event.location = location || event.location;
    event.image = image || event.image;

    const updated = await event.save();
    res.json(updated);
  } else {
    res.status(404);
    throw new Error('Event not found');
  }
});

// @desc    Delete event
export const deleteEvent = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);

  if (event) {
    await event.remove();
    res.json({ message: 'Event deleted' });
  } else {
    res.status(404);
    throw new Error('Event not found');
  }
});
