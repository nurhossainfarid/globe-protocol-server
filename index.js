// Dependence
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const colors = require('colors');
const cors = require('cors');
const connectDB = require('./db');
const routes = require('./routes');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.use(routes);


// initial the server
app.get('/', (req, res) => {
    res.send('Server successfully running');
});

const port = process.env.PORT || 5000;

// Database connection
connectDB(process.env.LOCAL_DATABASE).then(() => {
    console.log('Database connected successfully'.red.bold);
    app.listen(port, () => {
        console.log(`Server is running at ${port}`);
    });
}).catch(err => {
    console.log(err);
})

