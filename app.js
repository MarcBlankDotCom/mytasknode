const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('My Task');
});

app.listen(port, () => {
    console.log(`My task is run at http://localhost:${port}`);
});