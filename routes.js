
const express = require('express');

const app = express();


app.use(express.json());


let students = [
    { id: 1, name: "Sanjay", course: "B.Tech CSE" },
    { id: 2, name: "Rahul", course: "B.Tech IT" }
];


app.get('/students', (req, res) => {
    res.status(200).json(students);
});


app.post('/students', (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);

    res.status(201).json({
        message: "Student added successfully",
        student: newStudent
    });
});


app.put('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    student.name = req.body.name;
    student.course = req.body.course;

    res.json({
        message: "Student updated successfully",
        student: student
    });
});


app.delete('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);

    students = students.filter(s => s.id !== id);

    res.json({ message: "Student deleted successfully" });
});


app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
