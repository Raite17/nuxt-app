const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const keys = require('./keys');

mongoose.connect(keys.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.error(error));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


module.exports = app;