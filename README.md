MDTP apprentices demo app
=========================

This is a quick, dirty Node/Express/MongoDB application which functions as a library of books.

It serves a library (list) view, a detailed view of each book, and a form for new books to be added to the library. Views are written using the **nunjucks** templating language.

The application stores its data in a **MongoDB** database, and uses **Mongoose** to access the DB.

It also calls the *goodreads.com* API to populate the detail view with additional metadata about each book.

The app doesn't understand the concept of users, authentication or authorisation. Any user can anonymously edit the book library.

Installation
-----------

To run it, make sure that the two environment variables ```MONGODB_URI``` and ```GOODREADS_API_KEY``` are set.

The easiest way to do that is to create an app.env file with the data, and run ```source app.env``` in your terminal window before running the application. The application will not start without these environment variables set in some way.

Then run ```npm install``` to install dependencies using NPM.

Finally, run ```npm start```.

The application should then be available on **localhost** on port 4000.
