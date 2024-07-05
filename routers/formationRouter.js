const express = require('express');
const router = express.Router();
const Formation = require('../models/formationModel');

router.get('/formation', async (req, res) => {
const formation = await Formation.find({});
res.json(formation)
})

router.post('/formation', async (req, res) => {
    const newFormation = req.body
    await Formation.create(newFormation)
    res.json(newFormation)
})

router.delete('/formation/:id', async (req, res) =>{
    const {id}= req.params;
    const formation = await Formation.findById(id);
    await Formation.findByIdAndDelete(id);
    res.json({message:`la formation ${formation.formation} a bien été supprimée`});
})


router.patch('/formation/:id', async (req, res) =>{
    const {id}= req.params;
    const formation = await Formation.findById(id);
    await Formation.findByIdAndUpdate(id, {...formation, ...req.body});
    res.json({message:`la formation ${formation.formation} a bien été modifiée`});
})

router.get('/formation/:id', async (req, res) =>{
    const {id}= req.params;
    const formation = await Formation.findById(id);
    res.json(formation);
})

router.put('/formation/:id', async (req, res) =>{
    const {id}= req.params;
    const formation = await Formation.findById(id);
    await Formation.findByIdAndUpdate(id, {...formation, ...req.body});
    res.json({message:`la formation ${formation.formation} a bien été modifiée`});
})




module.exports = router