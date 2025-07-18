const express = require('express');
const app = express();
const PORT = 3000;


// Middleware to log all requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


// /home
app.get('/home', (req, res) => {
  res.send('Welcome to the Home Page!');
});


// /info
app.get('/info', (req, res) => {
  res.send('This project demonstrates route testing with error handling.');
});


// /crash
app.get('/crash', (req, res, next) => {
  const error = new Error('Something went wrong internally.');
  error.status = 500;
  next(error);
});


// (catch-all for undefined routes)
app.use((req, res, next) => {
  res.status(404).send('404 Page Not Found');
});


app.use((err, req, res, next) => {
  console.error('Internal Error:', err.message);
  res.status(err.status || 500).send('500 Internal Server Error');
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
