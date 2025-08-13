import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js'; // ✅ Added here
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import blogRoutes from './routes/blogRoutes.js';
import contentRoutes from './routes/contentRoutes.js';
import postRoutes from "./routes/postRoutes.js";
//import eventRegistrationRoutes from '../routes/eventRegistrationRoutes.js';
import registrationRoutes from './routes/registrationRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/bookings', bookingRoutes); // ✅ Place this before error handlers
app.use('/api/blogs', blogRoutes);
app.use('/api/contents', contentRoutes);
app.use("/api/posts", postRoutes);
//app.use('/api/event-registrations', eventRegistrationRoutes);
app.use('/api/registrations', registrationRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Error Handlers - Keep these at the very end
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
