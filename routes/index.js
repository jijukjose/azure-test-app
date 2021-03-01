var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', message: process.env.MESSAGE || 'this is development', nodeenv: process.env.NODE_ENV});
});

module.exports = router;
