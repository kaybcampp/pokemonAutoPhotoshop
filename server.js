const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {
    res.send('CORS server is running!');
});

app.listen(port, () => {
    console.log(`CORS server listening at http://localhost:${port}`);
});
