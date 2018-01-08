// Import modules
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// Require two routers
var list = require('./routes/list');
var detail = require('./routes/detail');
var addNew = require('./routes/addNew');

// Get the JSON file for application config
var config = require("./config.json");

// Get the express app
var app = express();

// Use EJS templating language
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Use bodyParser to interpret POST requests from the client
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set public directory
app.use(express.static(path.join(__dirname, 'public')));

// Assign a router to handle each URL pattern
app.use('/', list);
app.use('/detail/', detail);
app.use('/add-new', addNew);

// Make this file accessible as an import
module.exports = app;
