const express = require('express');
const router = express.Router();
const LoisirModel = require('../models/loisirModel');


router.get('/loisir', async (req, res) => {
const loisir = await LoisirModel.find({});
res.json(loisir)
})

router.post ('/loisir', async (req, res) => {
    const loisir = req.body 
    await LoisirModel.create(loisir)
    res.json({message:`le loisir ${loisir.loisir} a bien été ajoutée`});
})

router.delete('/loisir/:id', async (req, res) => {
    const {id} = req.params;
    const loisir = await LoisirModel.findById(id);
    
    await LoisirModel.findByIdAndDelete(id);
    res.json({message:`le loisir ${loisir.loisir} a bien été supprimée`});
})

router.patch('/loisir/:id', async (req, res) => {
    const {id} = req.params;
    const {loisir} = req.body;
    const updatedLoisir = await LoisirModel.findByIdAndUpdate(id, {loisir}, {new: true});
    res.json(updatedLoisir);
})

router.get('/loisir/:id', async (req, res) => {
    const {id} = req.params;
    const loisir = await LoisirModel.findById(id);
    res.json(loisir);
})

module.exports = router