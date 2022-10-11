const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')


// middleware
app.use(express.json());
app.use(cors());


// routes
const tourRoute = require('./routes/tour.route')

app.get('/', (req, res) => {
    res.send('Route is working! YAY');
})

app.use('/api/v1/tour', tourRoute)


module.exports = app;