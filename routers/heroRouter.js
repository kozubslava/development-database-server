const express = require("express");
const heroRouter = express.Router();
const HeroContronner = require("../controllers/heroController");
const { findHero } = require("../middlewares/userMV");
const {findImage} = require('../middlewares/imageMV')
const superpowerRouter = require("./superpowerRouter");

heroRouter.post("/", HeroContronner.createHero);
heroRouter.get("/", HeroContronner.getHeros);
heroRouter.get("/:heroId", findHero, HeroContronner.getHero);
heroRouter.put("/:heroId", findHero, HeroContronner.updateHero);
heroRouter.delete("/:heroId", findHero, HeroContronner.deleteHero);
heroRouter.post("/:heroId/images/:imageId", findHero,findImage,HeroContronner.addHeroToImage);
heroRouter.get("/:heroId/images", findHero,HeroContronner.getHeroWithImage);

heroRouter.use("/:heroId/superpowers", findHero, superpowerRouter);

module.exports = heroRouter;
