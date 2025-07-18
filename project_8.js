const express = require('express');
const app = express();
const PORT = 3000;
const blogs = [
  { id: 1, title: 'Intro to Node.js', content: 'Node.js is a JavaScript runtime built on Chrome\'s V8 engine...' },
  { id: 2, title: 'Routing in Express', content: 'Routing in Express helps you define endpoints for your app...' },
  { id: 3, title: 'Middleware Explained', content: 'Middleware functions have access to req, res, and next...' }
];
// Middleware to log visits to any /blogs route
app.use('/blogs', (req, res, next) => {
  console.log(`BLOG ACCESS: ${req.method} ${req.url}`);
  next();
});
// GET /blogs → list of blog titles
app.get('/blogs', (req, res) => {
  const titles = blogs.map(blog => blog.title);
  res.json(titles);
});
// GET /blogs/:id → full blog post
app.get('/blogs/:id', (req, res) => {
  const blogId = parseInt(req.params.id);
  const blog = blogs.find(b => b.id === blogId);
  if (blog) {
    res.json(blog);
  } else {
    res.status(404).json({ message: 'Blog not found' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
