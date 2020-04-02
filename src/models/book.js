const mongoose = require('mongoose');

BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    category: {
        type: String,
        minlength: 1,
        trim: true,
        default: 'other'
    },
    desccription: {
        type: String,
        minlength: 1,
        trim: true,
        required: true
    },
    imageLink: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

var Book = mongoose.model('Book', BookSchema);

module.exports = {Book};