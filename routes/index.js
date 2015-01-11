var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'العربية' , name: 'ليور يهوده موريسون'});
});

router.get('/arabic', function(req, res) {
  arabicAlpha = ['ا', 'ب', 'ت','ث', 'ج', 'ح', 'خ',  'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي' ]
  res.render('arabic', { arabic: arabicAlpha });
});



module.exports = router;
