const { Hero } = require("../models");

module.exports.findHero = async (req, res, next) => {
  try {
    const {
      params: { heroId },
    } = req;

    const hero = await Hero.findByPk(heroId);

    // if(!user) {
    //   // throw new Error('User not found');
    //   const error = createError(404, 'User not found');
    //   throw error;
    // }

    req.hero = hero;
    next();
  } catch (error) {
    next(error);
  }
};
