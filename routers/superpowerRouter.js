const express = require('express');
const superpowerRouter = express.Router();
const SuperpowerController = require('../controllers/superpowerController');

superpowerRouter.post('/',SuperpowerController.createSuperpower)

module.exports = superpowerRouter;