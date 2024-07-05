const express = require("express");
const compRouter = express.Router();
const Competence = require("../models/competanceModel");

compRouter.get("/competence", async (req, res) => {
  const competence = await Competence.find({});
  res.json(competence);
});

compRouter.post("/competence", async (req, res) => {
  const competence = req.body
  const newCompetence = await Competence.create(competence);
  res.json(newCompetence);
});


compRouter.delete("/competence/:id", async (req, res) => {
  const {id} = req.params;
  const competence = await Competence.findById(id);
  
  await Competence.findByIdAndDelete(id);
  res.json({message:`la competance ${competence.skills} a bien été supprimée`});
});



module.exports = compRouter;
