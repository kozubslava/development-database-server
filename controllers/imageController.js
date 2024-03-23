const {Image} = require ("../models")

module.exports.createImage = async (req, res, next) => {
  try {
    const { body, file:{filename} = {} } = req;
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