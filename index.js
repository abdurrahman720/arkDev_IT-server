const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5222;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Courses API Running');
})

app.listen(port, () => {
    console.log('Listening on port ' + port);
})