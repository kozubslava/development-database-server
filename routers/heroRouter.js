const express = require("express");
const heroRouter = express.Router();
const HeroContronner = require("../controllers/heroController");
const { findHero } = require("../middlewares/userMV");
const superpowerRouter = require("./superpowerRouter");

heroRouter.post("/", HeroContronner.createHero);
heroRouter.get("/", HeroContronner.getHeros);
heroRouter.get("/:heroId", findHero, HeroContronner.getHero);
heroRouter.put("/:heroId", findHero, HeroContronner.updateHero);
heroRouter.delete("/:heroId", findHero, HeroContronner.deleteHero);

heroRouter.use("/:heroId/superpowers", findHero, superpowerRouter);

module.exports = heroRouter;
