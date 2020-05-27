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
router.route('/')
        .get(ctrlIndex.getIndex)  
        .post(ctrlIndex.getAuth);

router.get('/blog', ctrlBlog.getBlog);

router.get('/about', ctrlAbout.getAbout);

router.route('/portfolio')
        .get(ctrlPortfolio.getPortfolio)
        .post(ctrlPortfolio.feedbackForm);

router.route('/admin')
        .get(ctrlAdmin.getAdmin)
        .post('/adminAbout', ctrlAdminAbout.setAdminAbout);

router.post('/admin/adminAvatar', ctrlAdminAvatar.uploadAvatar);

module.exports = router;
