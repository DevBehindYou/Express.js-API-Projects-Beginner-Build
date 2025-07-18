const express = require('express');
const app = express();
const PORT = 3000;
// Middleware to log each request method and URL
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
// Static route: /about
app.get('/about', (req, res) => {
  res.send(`
    <h1>About TechBridge Institute</h1>
    <p>TechBridge Institute was founded in 2018 with the goal of bridging the gap between academic learning and industry skills.
    With over 3,000 students graduated and 92% placement success, we offer hands-on training with real-world projects and mentorship
    from IT professionals across the globe.</p>
  `);
});
// Static route: /contact
app.get('/contact', (req, res) => {
  res.send(`
    <h1>Contact Us</h1>
    <p>Email: support@techbridge.edu.in</p>
    <p>Phone: +91 98765 43210</p>
    <p>Address: 5th Floor, Sigma Tech Park, Bengaluru - 560103</p>
  `);
});
// Static route: /services
app.get('/services', (req, res) => {
  res.send(`
    <h1>Our Services</h1>
    <ul>
      <li>Full Stack Development Bootcamp</li>
      <li>AI & Machine Learning Program</li>
      <li>Cybersecurity Essentials</li>
      <li>Cloud DevOps Certification</li>
      <li>UI/UX Design Sprint Course</li>
    </ul>
  `);
});

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to TechBridge Institute API. Try /about, /contact, or /services');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});