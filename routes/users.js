var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/arabic', function(req, res) {
  var arabicAlpha = ['ا', 'ب', 'ت','ث', 'ج', 'ح', 'خ',  'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي' ]

  res.send(arabicAlpha);
});

module.exports = router;
