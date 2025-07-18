const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3000;
let students = [
  { id: 0, name: 'unknown', course: 'unknown', email: 'unknown@example.com' },
  { id: 1, name: 'Neha Joshi', course: 'Data Science', email: 'neha.joshi@example.com' },
  { id: 2, name: 'Tarun Kumar', course: 'Full Stack', email: 'tarun.kumar@example.com' },
  { id: 3, name: 'Manisha Sharma', course: 'AI & ML', email: 'manisha.sharma@example.com' },
  { id: 4, name: 'Utkarsh Mittal', course: 'UI/UX Design', email: 'utkarsh.mittal@example.com' },
  { id: 5, name: 'Ravi Mehta', course: 'Cybersecurity', email: 'ravi.mehta@example.com' },
  { id: 6, name: 'Sneha Roy', course: 'Cloud Computing', email: 'sneha.roy@example.com' },
  { id: 7, name: 'Kunal Verma', course: 'DevOps', email: 'kunal.verma@example.com' },
  { id: 8, name: 'Pooja Singh', course: 'Frontend Development', email: 'pooja.singh@example.com' },
  { id: 9, name: 'Aman Kapoor', course: 'Backend Development', email: 'aman.kapoor@example.com' },
  { id: 10, name: 'Anjali Desai', course: 'Blockchain Technology', email: 'anjali.desai@example.com' }
];
// POST /students
app.post('/students/admission', (req, res) => {
  const { id, name, course, email, } = req.body;
  if (!id || !name || !course || !email) {
    return res.status(400).json({ message: 'Missing fields: id, name, or course' });
  }
  if (students.find(student => student.id === id)) {
    return res.status(409).json({ message: 'Student with this ID already exists' });
  }
  students.push({ id, name, course, email });
  res.status(201).send('201 Created - Thank you Shubham for registering in Node.js');
});
// Root
app.get('/', (req, res) => {
  res.send('Go To /students or /students/:id');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});