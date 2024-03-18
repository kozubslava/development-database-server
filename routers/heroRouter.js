const express = require("express");
const heroRouter = express.Router();
const HeroContronner = require("../controllers/heroController");

heroRouter.post("/", HeroContronner.createHero);
heroRouter.get("/", HeroContronner.getHeros);
heroRouter.get("/:HeroId", HeroContronner.getHero);
heroRouter.put("/:heroId", HeroContronner.updateHero);
heroRouter.delete("/:heroId", HeroContronner.deleteHero);

module.exports = heroRouter;
