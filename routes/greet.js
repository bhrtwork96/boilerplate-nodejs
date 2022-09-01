const express = require('express');
const router = express.Router();

const {greet} =require('../controller/greating');

router.get('/greet',greet);

module.exports = router;