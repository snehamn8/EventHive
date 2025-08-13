# 🎉 EventHive - Backend (MERN Stack)

**EventHive** is a Virtual Event Platform for B2B businesses. It offers features like event management, ticket booking, content sharing (videos, blogs), and user networking.

This is the **backend server** built using Node.js, Express, and MongoDB.

---

## 🚀 Features

- User registration and login (JWT authentication)
- Event creation, update, delete, and fetch
- Booking system for events
- Blogging system with tags
- Video and content management
- Clean, modular codebase with middleware and error handling

---

## 🧰 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Token (JWT)
- dotenv
- Nodemon (dev)
- CORS, Helmet (optional for production)

---

## 📁 Folder Structure

```
backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── blogController.js
│   ├── bookingController.js
│   ├── contentController.js
│   ├── eventController.js
│   ├── postController.js
│   └── userController.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── errorMiddleware.js
│
├── models/
│   ├── blogModel.js
│   ├── bookingModel.js
│   ├── contentModel.js
│   ├── eventModel.js
│   ├── postModel.js
│   ├── userModel.js
│   └── User.js
│
├── routes/
│   ├── blogRoutes.js
│   ├── bookingRoutes.js
│   ├── contentRoutes.js
│   ├── eventRoutes.js
│   ├── postRoutes.js
│   └── userRoutes.js
│
├── node_modules/
├── .env
├── server.js
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/eventhive-backend.git
cd eventhive-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 4. Start the development server

```bash
npm run dev
```

---

## 🧪 API Endpoints Overview

| Resource   | Method | Endpoint              | Description                |
|------------|--------|-----------------------|----------------------------|
| Users      | POST   | `/api/users/register` | Register a new user        |
| Users      | POST   | `/api/users/login`    | Login and get JWT token    |
| Events     | GET    | `/api/events`         | Get all events             |
| Events     | POST   | `/api/events`         | Create a new event         |
| Bookings   | POST   | `/api/bookings`       | Book an event              |
| Blogs      | GET    | `/api/blogs`          | Get all blog posts         |
| Content    | POST   | `/api/content`        | Upload a video/blog/social |

> All POST routes (except login/register) are **protected** by JWT middleware.

---

## 🔐 Security Notes

- JWT-based route protection
- Input validation for required fields
- Error handling middleware
- Ready for CORS and Helmet integration for production

---

## 📌 Author

Made with 💻 by [Your Name]

---

## 🏁 Next Step

✅ Backend complete  
🔜 Move to frontend integration and connect APIs!
