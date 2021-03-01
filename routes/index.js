var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', message: process.env.NODE_ENV || 'this is development' });
});

module.exports = router;
