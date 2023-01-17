var express = require('express');
var router = express.Router();
var sms = require('../controllers/smsController')

router.post('/', sms.received)
router.get("/welcome", function (req, res) {
    res.send("Welcome")
    
})

module.exports = router