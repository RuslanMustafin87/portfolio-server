var express = require('express');
var router = express.Router();

const ctrlFeedback = require('../controllers/feedback');
const ctrlAdmin = require('../controllers/admin');
const ctrlAdminAbout = require('../controllers/adminAbout');

router.post('/feedback', ctrlFeedback.addFeedback);

router.get('/admin', ctrlAdmin.getAdmin);
router.post('/adminAbout', ctrlAdminAbout.addAdminAbout);

module.exports = router;
