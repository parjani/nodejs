const express = require('express');
const path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const users = require('./routes/users');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/NodeAPI', users);
module.exports = app;

// Access the API key

// Use the API key in your application code
// For example, you can use it to make API requests, authenticate users, etc.
