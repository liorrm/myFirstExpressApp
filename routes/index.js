var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'العربية' , name: 'ليور يهوده موريسون'});
});

module.exports = router;
