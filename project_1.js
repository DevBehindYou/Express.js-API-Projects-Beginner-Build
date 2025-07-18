const express = require('express');
// Create an Express application and body-parser
const app = express();

const PORT = 3000;
// Sample data: student array

let students = [
  { id: 0, name: 'unknown', course: 'unknown' },
  { id: 1, name: 'Neha Joshi', course: 'Data Science' },
  { id: 2, name: 'Tarun Kumar', course: 'Full Stack' },
  { id: 3, name: 'Manisha Sharma', course: 'AI & ML' },
  { id: 4, name: 'Utkarsh Mittal', course: 'UI/UX Design' },
  { id: 5, name: 'Ravi Mehta', course: 'Cybersecurity' },
  { id: 6, name: 'Sneha Roy', course: 'Cloud Computing' },
  { id: 7, name: 'Kunal Verma', course: 'DevOps' },
  { id: 8, name: 'Pooja Singh', course: 'Frontend Development' },
  { id: 9, name: 'Aman Kapoor', course: 'Backend Development' },
  { id: 10, name: 'Anjali Desai', course: 'Blockchain Technology' }
];
// Routes
// GET /students - Get all students
app.get('/students', (req, res) => {
res.json(employees);
});
app.get('/students/:id', (req, res) => {
  const empId = parseInt(req.params.id);
  const student = students.find(emp => emp.id === empId);
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ message: 'Student not found - 404 error' });
  }
});
app.get('/', (req, res) => {
res.send('Go To /students/:id Route')
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});