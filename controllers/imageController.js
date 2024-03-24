const { Image } = require("../models");

module.exports.createImage = async (req, res, next) => {
  try {
    const { body, file: { filename } = {} } = req;
    const imageData = {
      ...body,
      imagePath: filename,
    };
    const image = await Image.create(imageData);

    res.status(201).send({ data: image });
  } catch (error) {
    next(error);
  }
};

module.exports.getImage = async (req, res, next) => {
  try {
    const { image } = req;
    res.status(200).send({ data: image });
  } catch (error) {
    next(error);
  }
};

module.exports.getImages = async (req, res, next) => {
  try {
    const images = await Image.findAll();
    res.status(200).send(images);
  } catch (error) {
    next(error);
  }
};

module.exports.updatImage = async (req, res, next) => {
  try {
    const { body, image } = req;
    const updatedImage = await image.update(body, {
      returning: true,
    });

    res.status(200).send({ data: updatedImage });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteImage = async (req, res, next) => {
  try {
    const { image } = req;
    await image.destroy();

    res.status(204).send({ data: image });
  } catch (error) {
    next(error);
  }
};
