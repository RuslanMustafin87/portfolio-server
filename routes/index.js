var express = require('express');
var router = express.Router();

const ctrlIndex = require('../controllers/index');
const ctrlBlog = require('../controllers/blog');
const ctrlAbout = require('../controllers/about');
const ctrlPortfolio = require('../controllers/portfolio');
const ctrlAdmin = require('../controllers/admin');
const ctrlAdminAbout = require('../controllers/adminAbout');
const ctrlAdminAvatar = require('../controllers/adminAvatar');

/* GET home page. */
router.get('/', ctrlIndex.getIndex);
router.post('/', ctrlIndex.getAuth);

router.get('/blog', ctrlBlog.getBlog);

router.get('/about', ctrlAbout.getAbout);

router.get('/portfolio', ctrlPortfolio.getPortfolio);
router.post('/portfolio', ctrlPortfolio.feedbackForm);

router.get('/admin', ctrlAdmin.getAdmin);
router.post('/adminAbout', ctrlAdminAbout.setAdminAbout);
router.post('/adminAvatar', ctrlAdminAvatar.uploadAvatar);

module.exports = router;
