const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to my homepage baby");
});

app.listen(3000, () => {
    console.log("Wazzappppp");
});

