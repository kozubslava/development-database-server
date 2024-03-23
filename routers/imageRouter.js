
const express = require("express");
const imageRouter = express.Router();
const ImageController = require('../controllers/imageController');
const imageUpload = require('../utils/imageUpload')

imageRouter.post('/', imageUpload.single("sup"),ImageController.createImage);
// imageRouter.get('/', ImageController.getImage);

module.exports = imageRouter;