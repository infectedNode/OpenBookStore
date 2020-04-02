const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');

var app = express();

app.get('/', (req, res) => {
    res.send('Hi from Server');
});

const port = process.env.PORT || 2000;

app.listen(port, () => {
    console.log(`Server started successfully on port ${port}`);
})