const express = require('express');
const app = express();
const PORT = 3000;
// Mock course list
const courses = [
  { id: 1, title: 'Web Development Basics', duration: '2 Months' },
  { id: 2, title: 'Frontend with React', duration: '1.5 Months' },
  { id: 3, title: 'Backend with Express', duration: '1 Month' },
  { id: 4, title: 'Full Stack Bootcamp', duration: '3 Months' },
  { id: 5, title: 'Advanced Node.js', duration: '1 Month' },
  { id: 6, title: 'Python for Data Science', duration: '2 Months' }
];
// GET /courses/:courseId
app.get('/courses/:courseId', (req, res) => {
  const courseId = parseInt(req.params.courseId);
  const course = courses.find(course => course.id === courseId);
  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
