const express = require('express');
const heroRouter = require('./heroRouter')
const router = express.Router();

router.use('/heros', heroRouter);

module.exports = router;