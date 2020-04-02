const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {mongoose} = require('./db/mongoose');
const {Book} = require('./models/book');

var app = express();

// Middleware to add headers for the frontend calls
app.use(cors());

// Middleware to process JSON data
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hi from Server');
});

const port = process.env.PORT || 2000;

app.listen(port, () => {
    console.log(`Server started successfully on port ${port}`);
})