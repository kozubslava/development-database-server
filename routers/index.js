const express = require('express');
const heroRouter = require('./heroRouter')
const imageRouter = require('./imageRouter')
const router = express.Router();

router.use('/heroes', heroRouter);
router.use('/images', imageRouter);

module.exports = router;