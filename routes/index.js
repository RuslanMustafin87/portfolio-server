var express = require('express');
var router = express.Router();

const ctrlIndex = require('../controllers/index');
const ctrlBlog = require('../controllers/blog');
const ctrlAbout = require('../controllers/about');
const ctrlPortfolio = require('../controllers/portfolio');

/* GET home page. */
router.get('/', ctrlIndex.getIndex);
router.post('/', ctrlIndex.getAuth);

router.get('/blog', ctrlBlog.getBlog);

router.get('/about', ctrlAbout.getAbout);

router.get('/portfolio', ctrlPortfolio.getPortfolio);


module.exports = router;
