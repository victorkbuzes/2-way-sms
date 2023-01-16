var express = require('express');
var router = express.Router();
var sms = require('../controllers/smsController')

router.post('/', sms.received)
module.exports = router