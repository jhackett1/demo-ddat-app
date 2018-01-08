// Import modules
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
require('./services/goodreads.js')

// Import controller & model
var bookController = require("./controllers/bookController");

// Open database connection
var mongoUrl = process.env.MONGODB_URI;
mongoose.connect(mongoUrl, {useMongoClient: true}, function(err){
  if(err) return console.log(err);
  console.log("DB connection opened");
})

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

// Assign controllers to routes
app.get('/', bookController.getList)
app.get('/detail/:id', bookController.getDetail)
app.get('/add-new', bookController.getNew)
app.post('/add-new/submit', bookController.postNew)
app.post('/detail/:id/delete', bookController.delete)

// Make this file accessible as an import
module.exports = app;
