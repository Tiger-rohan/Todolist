const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

    

app.post('/add', (req, res) => { // Corrected this line
    const task = req.body.task;
    // Add logic to handle the task, e.g., save to database, respond with success message, etc.
    res.send({ message: 'Task received', task });
});

app.listen(3001, () => {
    console.log("Server is running");
});
