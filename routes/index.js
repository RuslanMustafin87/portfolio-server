var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index/index', { title: 'Express' });
  // res.sendFile(process.cwd() + '/public/dist/index.html', { title: 'Express' });
});

router.get('/portfolio.html', function(req, res, next) {
  res.render('portfolio/portfolio', { title: 'Express' });
  // res.sendFile(process.cwd() + '/public/dist/index.html', { title: 'Express' });
});

router.get('/blog.html', function(req, res, next) {
  res.render('blog/blog', { title: 'Express' });
  // res.sendFile(process.cwd() + '/public/dist/index.html', { title: 'Express' });
});

router.get('/about.html', function(req, res, next) {
  res.render('about/about', { title: 'Express' });
  // res.sendFile(process.cwd() + '/public/dist/index.html', { title: 'Express' });
});

module.exports = router;
