const {Image} = require ("../models")

module.exports.createImage = async (req, res, next) => {
  try {
    const { body, file:{filename} } = req;
    const imageData = {
      ...body,
      path: filename,
    };
    const image = await Image.createImage(imageData);

    res.status(201).send({ data: image });
  } catch (error) {
    next(error);
  }
};