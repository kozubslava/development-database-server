const { Hero } = require("../models");
const hero = require("../models/hero");

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
  } catch (error) {
    next(error);
  }
};

module.exports.getHeros = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

module.exports.updateHero = async (req, res, next) => {
  try {
    const { body, params: {heroId}} = req;
    const hero = await Hero.findByPk(heroId);
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
    const {params: {heroId}} = req;
    const hero = await Hero.findByPk(heroId);
    await hero.destroy();

    res.status(200).send({ data: hero });
  } catch (error) {
    next(error);
  }
};
