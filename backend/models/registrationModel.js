// backend/models/eventRegistrationModel.js
import mongoose from 'mongoose';

const eventRegistrationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    company: {
      type: String,
    },
    notes: {
      type: String,
    },
    eventId: {
      type: String, // Change this from ObjectId to String
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const EventRegistration = mongoose.model('EventRegistration', eventRegistrationSchema);

export default EventRegistration;
