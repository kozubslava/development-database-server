const { Hero, Image } = require("../models");
// const {Image} = require ("../models")

module.exports.createHero = async (req, res, next) => {
  try {
    const { body } = req;
    const hero = await Hero.create(body);
    res.status(201).send({ data: hero });
  } catch (error) {
    next(error);
  }
};

module.exports.getHero = async (req, res, next) => {
  try {
    const { hero } = req;
    res.status(200).send({ data: hero });
  } catch (error) {
    next(error);
  }
};

module.exports.getHeros = async (req, res, next) => {
  try {
    const heros = await Hero.findAll();
    res.status(200).send(heros);
  } catch (error) {
    next(error);
  }
};

module.exports.updateHero = async (req, res, next) => {
  try {
    const { body, hero } = req;
    const updatedHero = await hero.update(body, {
      returning: true,
    });

    res.status(200).send({ data: updatedHero });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteHero = async (req, res, next) => {
  try {
    const { hero } = req;
    await hero.destroy();

    res.status(200).send({ data: hero });
  } catch (error) {
    next(error);
  }
};

module.exports.addHeroToImage = async (req, res, next) => {
  try {
    const { hero, image } = req;

    await hero.addImage(image);

    res.status(201).send({});
  } catch (error) {
    next(error);
  }
};

module.exports.getHeroWithImage = async (req, res, next) => {
  try {
    const { hero } = req;
    const heroImages = await hero.getImages();
    res.status(200).send(heroImages);
  } catch (error) {
    next(error);
  }
};
