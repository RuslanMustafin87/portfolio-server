var express = require('express');
var router = express.Router();

const ctrlFeedback = require('../controllers/feedback');
const ctrlAdmin = require('../controllers/admin');
const ctrlAdminAbout = require('../controllers/adminAbout');
const ctrlAdminAvatar = require('../controllers/adminAvatar');
const ctrlGetAvatar = require('../controllers/getAvatar');

router.post('/feedback', ctrlFeedback.addFeedback);

router.post('/getAvatar', ctrlGetAvatar.getAvatar);

router.get('/admin', ctrlAdmin.getAdmin);
router.post('/adminAbout', ctrlAdminAbout.addAdminAbout);
router.post('/adminAvatar', ctrlAdminAvatar.setAvatar);

module.exports = router;
