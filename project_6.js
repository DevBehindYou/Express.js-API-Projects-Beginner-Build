const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
// POST /feedback route
app.post('/feedback', (req, res) => {
  const { name, email, message } = req.body;
  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields (name, email, message) are required.' });
  }
  // Success response
  res.send(`Thank you for your feedback, ${name}!`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
