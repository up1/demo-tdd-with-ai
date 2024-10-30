// app.js
const express = require('express');
const app = express();

// Mock data for testing
const users = [
  { id: 1, name: 'Somkiat' }
];

// Route to get user by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);

  // Success: user found
  if (userId === 1) {
    return res.status(200).json(users[0]);
  }

  // Not found: user ID is 2
  if (userId === 2) {
    return res.status(404).json({ message: `User id = ${userId} not found` });
  }

  // Internal server error: user ID is 3
  if (userId === 3) {
    return res.status(500).json({ message: 'Error' });
  }

  // If ID is invalid (e.g., non-integer or out of range)
  if (isNaN(userId) || userId <= 0) {
    return res.status(400).json({ message: 'Invalid user ID' });
  }

  // Default response for other cases
  res.status(404).json({ message: `User id = ${userId} not found` });
});

// Export the app for testing
module.exports = app;
