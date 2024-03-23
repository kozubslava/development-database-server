const { Image } = require("../models");

module.exports.findImage = async (req, res, next) => {
  try {
    const {
      params: { imageId },
    } = req;

    const image = await Image.findByPk(imageId);
    req.image = image;
    next();
  } catch (error) {
    next(error);
  }
};
