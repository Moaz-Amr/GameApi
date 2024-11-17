const express = require('express');
const fs = require('fs');
const { spawn } = require('child_process');

const app = express();
const port = process.env.PORT || 3000; // Use environment variable PORT

// Middleware to parse JSON bodies
app.use(express.json());


// Endpoint to read the content of VIP.js
app.get('/api/Users/VIP', (req, res) => {
    fs.readFile('VIP.js', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send('Internal Server Error: Could not read file.');
        }
        res.send(data);
    });
});



// Endpoint to read JSON data
app.get('/api/Users/leijao', (req, res) => {
    fs.readFile('leijao.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send('Internal Server Error: Could not read file.');
        }
        try {
            res.send(JSON.parse(data));
        } catch (jsonErr) {
            console.error('Error parsing JSON:', jsonErr);
            return res.status(500).send('Internal Server Error: Invalid JSON format.');
        }
    });
});
// Endpoint to read JSON data
app.get('/api/Users/fk4j', (req, res) => {
    fs.readFile('fk4j.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send('Internal Server Error: Could not read file.');
        }
        try {
            res.send(JSON.parse(data));
        } catch (jsonErr) {
            console.error('Error parsing JSON:', jsonErr);
            return res.status(500).send('Internal Server Error: Invalid JSON format.');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
