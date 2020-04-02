const mongoose = require('mongoose');

// "process.env.MONGODB_URI" is for MongoDB Atlas password
let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/BookStore'; 

mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true }).then(() => {
    console.log("Database Connected...");
}).catch(e => {
    console.log(`Database Connection FAILED! \nError: ${e}`);
})

module.exports = {mongoose}