const express = require('express');

const app = express();
const cors = require('cors');

// middleware
app.use(cors());
app.use(express.json());

// initial the server
app.get('/', (req, res) => {
    res.send('Server successfully running');
});

const port = 5050;

// server start
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});
