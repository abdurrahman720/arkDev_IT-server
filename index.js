const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5222;

app.use(cors());

const courses = require('./data/course-name.json')

app.get('/', (req, res) => {
    res.send('Courses API Running');
})

app.get('/courses',(req, res) => {
    res.send(courses);
})


app.listen(port, () => {
    console.log('Listening on port ' + port);
})