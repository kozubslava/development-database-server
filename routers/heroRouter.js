const express = require("express");
const heroRouter = express.Router();
const HeroContronner = require("../controllers/heroController");
const {findHero} = require('../middlewares/userMV')

heroRouter.post("/", HeroContronner.createHero);
heroRouter.get("/", HeroContronner.getHeros);
heroRouter.get("/:heroId", findHero,HeroContronner.getHero);
heroRouter.put("/:heroId", findHero,HeroContronner.updateHero);
heroRouter.delete("/:heroId", findHero,HeroContronner.deleteHero);

module.exports = heroRouter;
