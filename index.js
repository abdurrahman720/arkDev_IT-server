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

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    courses.filter(course => course.category_id === id)
})


app.listen(port, () => {
    console.log('Listening on port ' + port);
})