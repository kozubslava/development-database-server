
const express = require("express");
const imageRouter = express.Router();
const ImageController = require('../controllers/imageController');

imageRouter.post('/', ImageController.createImage);
// imageRouter.get('/', ImageController.getImage);

module.exports = imageRouter;