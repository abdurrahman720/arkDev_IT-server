const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5222;

app.use(cors());

const coursesName = require('./data/course-name.json')
const courses = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('Courses API Running');
})

app.get('/courses',(req, res) => {
    res.send(coursesName);
})

app.get('/allcourses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
   const course= courses.filter(course => course.category_id === id)
    res.send(course);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(course => course._id === id);
    res.send(selectedCourse);
})

app.listen(port, () => {
    console.log('Listening on port ' + port);
})