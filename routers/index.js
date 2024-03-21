const express = require('express');
const heroRouter = require('./heroRouter')
const router = express.Router();

router.use('/heroes', heroRouter);

module.exports = router;