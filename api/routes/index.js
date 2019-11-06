var express = require('express');
var router = express.Router();

const ctrlFeedback = require('../controllers/feedback');

router.post('/feedback', ctrlFeedback.addFeedback);

module.exports = router;
