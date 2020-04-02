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

app.post('/books', (req, res) => {
    let book = new Book({
        title: req.body.title,
        description: req.body.description,
        imageLink: req.body.imageLink
    });

    book.save().then((result) => {
        res.status(200).send(result);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/books', (req, res) => {
    Book.find().then((books) => {
        res.status(200).send({books});
    }, (err) => {
        res.status(400).send(err);
    });
});

const port = process.env.PORT || 2000;

app.listen(port, () => {
    console.log(`Server started successfully on port ${port}`);
})