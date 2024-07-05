const express = require('express');
const router = express.Router();
const ExperiancePro = require('../models/experianceProModel');

router.get('/experiance', async (req, res) => {
    const experiance = await ExperiancePro.find({});
    res.json(experiance)
})

router.post('/experiance', async (req, res) => {
    const experiance = req.body
    const newExperiance = await ExperiancePro.create(experiance)
    res.json(newExperiance)

})

router.delete('/experiance/:id', async (req, res) => {
    const {id} = req.params;
    const experiance = await ExperiancePro.findById(id);
    
    await ExperiancePro.findByIdAndDelete(id);
    res.json({message:`l'experiance ${experiance.company} a bien été supprimée`});
});

router.patch('/experiance/:id', async (req, res) => {
    const {id} = req.params;
    const experiance = await ExperiancePro.findById(id);
    await ExperiancePro.findByIdAndUpdate(id, {...experiance, ...req.body});
    res.json({message:`l'experiance ${experiance.company} a bien été modifiée`});
});

router.get('/experiance/:id', async (req, res) => {
    const {id} = req.params;
    const experiance = await ExperiancePro.findById(id);
    res.json(experiance)
})


module.exports = router