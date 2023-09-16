const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
const UserRoutes = require('./routes/userRoutes');
const TeacherRoutes = require('./routes/teacherRoutes');
const StudentRoutes = require('./routes/studentRoutes');

import { test } from '@playwright/test';
import { setTimeout } from 'timers/promises';

// Connect to MongoDB
mongoose.connect('mongodb://localhost/grades_app', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
  process.exit(-1);
});

// Middleware
app.use(express.json());

// Initialize route handlers
const userRoutes = new UserRoutes(app);
const teacherRoutes = new TeacherRoutes(app);
const studentRoutes = new StudentRoutes(app);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
