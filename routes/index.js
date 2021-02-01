var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const params = {
    title: 'NeoGCalendar' 
  };
  res.render('index', params);
});

module.exports = router;
