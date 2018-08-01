// Import modules
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var nunjucks = require('nunjucks')

// Import controller
var bookController = require("./controllers/bookController");

// Open database connection
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true}, function(err){
  if(err) return console.log(err);
  console.log("DB connection opened");
})

// Turn on Express
var server = express();

// Use nunjucks templating language
nunjucks.configure(__dirname + '/views', {
  autoescape: true,
  express: server
});

// Use bodyParser to interpret POST requests from the client
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

// Set public directory
server.use(express.static(path.join(__dirname, 'public')));

// Assign controllers to routes
server.get('/', bookController.getList)
server.get('/detail/:id', bookController.getDetail)
server.get('/add-new', bookController.getNew)
server.post('/add-new/submit', bookController.postNew)
server.post('/detail/:id/delete', bookController.delete)

// Make this file accessible as an import
module.exports = server;
