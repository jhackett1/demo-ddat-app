var express = require('express');
var router = express.Router();

// GET detail view
router.get('/:id', function(req, res, next) {
  console.log(req.params.id)
  res.render('detail', {
    title: 'Express',
    id: req.params.id
  });
});

module.exports = router;
