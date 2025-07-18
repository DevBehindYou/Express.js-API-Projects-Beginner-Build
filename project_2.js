const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3000;
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
// GET /students (with optional course filter)
app.get('/students', (req, res) => {
  const { course } = req.query;
  if (course) {
    const filtered = students.filter(s =>
      s.course.toLowerCase() === course.toLowerCase()
    );
    if(filtered.length > 0)
        return res.json(filtered)
    else res.status(404).json({ message: 'No students found for this course' });
  }
  res.json(students);
});
// Root
app.get('/', (req, res) => {
  res.send('Go To /students or /students/:id');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
