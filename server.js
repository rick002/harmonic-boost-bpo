// Import express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/harmonic'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname+'dist/harmonic/index.html'));
});

// Start the app by listening on the default heroku port
app.listen(process.env.PORT || 8080);