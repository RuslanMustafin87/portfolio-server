var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index/index', { title: 'Express' });
  // res.sendFile(process.cwd() + '/public/dist/index.html', { title: 'Express' });
});

module.exports = router;
