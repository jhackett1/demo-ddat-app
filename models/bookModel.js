var mongoose = require('mongoose');

var bookModel = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  author: String,
  genre: String
})

module.exports = mongoose.model('Book', bookModel);
