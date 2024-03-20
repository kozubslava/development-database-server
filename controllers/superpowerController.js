const { Superpower, Hero } = require("../models");

module.exports.createSuperpower = async (req, res, next) => {
  try {
    const { body, hero } = req;
    const superpower = await hero.createSuperpower(body);
    res.send({ data: superpower });
  } catch (error) {
    next(error);
  }
};

module.exports.getSuperpower = (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

module.exports.getSuperpowers = (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

module.exports.updateSuperpower = (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

module.exports.deleteSuperpower = (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
