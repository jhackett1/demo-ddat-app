// Import the model
var Book = require("../models/book");
var goodreads = require('../services/goodReads.js');

var bookController = {

  // Handle a get request for the list view
  getList: function(req, res){
    // Get all documents in the book collection from the DB
    Book.find(function(err, books){
      if(err){ return res.status(500).send('Error!') };
      // ...and render the view with that data
      res.render('list.njk', {
        books: books
      });
    })
  },

  // Handle a get request for the detail view
  getDetail: function(req, res){
    // Find a single document from the DB by the URL ID parameter...
    Book.findById(req.params.id, function(err, book){
      if(err){ return res.status(500).send('Error!') };
      // ...get metadata from the goodreads API
      goodreads.getMetadata(book.title, function(err, metadata){
      if(err){ return console.log(err) };
        // ...and render the view with that data
        res.render('detail.njk', {
          book: book,
          metadata: metadata[0]
        });
      })
    })
  },

  // Handle a request for the add new form
  getNew: function(req, res){
    res.render('addNew.njk', {status: false});
  },

  // Handle a form submission and save to DB
  postNew: function(req, res){
    // Create a new object from the model...
    var newBook = new Book(req.body);
    // ...and save it to the DB
    newBook.save(function(err, newBook){
      if(err){ return res.status(500).render('addNew', {status: 'error'}); };
      res.status(201).render('addNew.njk', {status: 'success'});
    });
  },

  delete: function(req, res){
    // Find a single document from the DB by the URL ID parameter...
    Book.findById(req.params.id, function(err, book){
      if(err){ return res.status(500).send('Error!') };
      // ...and delete it
      book.remove();
      // Now render the list
      Book.find(function(err, books){
        if(err){ return res.status(500).send('Error!') };
        res.render('list', {
          books: books
        });
      })
    })
  }

};

module.exports = bookController;
