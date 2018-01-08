var express = require('express');
var router = express.Router();

// GET list view
router.get('/', function(req, res, next) {
  res.render('list', { title: 'Express' });
});

module.exports = router;
