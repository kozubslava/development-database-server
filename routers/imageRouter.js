
const express = require("express");
const imageRouter = express.Router();
const ImageController = require('../controllers/imageController');
const imageUpload = require('../utils/imageUpload');
const { findImage } = require("../middlewares/imageMV");

imageRouter.post('/', imageUpload.single("sup"),ImageController.createImage);
imageRouter.get('/', ImageController.getImages);
imageRouter.get("/:imageId", findImage, ImageController.getImage);
imageRouter.put("/:imageId", findImage, ImageController.updatImage);
imageRouter.delete("/:imageId", findImage, ImageController.deleteImage);

module.exports = imageRouter;