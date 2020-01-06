const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('Hi from Server');
});

const port = process.env.PORT || 2000;

app.listen(port, () => {
    console.log(`Server started successfully on port ${port}`);
})






Print("Anshika is great")
