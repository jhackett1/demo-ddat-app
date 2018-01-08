var express = require('express');
var router = express.Router();

// GET addNew view
router.get('/', function(req, res, next) {
  res.render('addNew', { title: 'Express' });
});

module.exports = router;
