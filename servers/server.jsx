/* eslint-disable no-undef */
// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define user schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

// eslint-disable-next-line react-refresh/only-export-components
const User = mongoose.model('User', userSchema);

// Parse JSON request bodies
app.use(bodyParser.json());

// Handle signup requests
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ error: 'User already exists' });
  }

  // Create new user
  const newUser = new User({ email, password });
  await newUser.save();

  res.json({ message: 'Signup successful' });
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});