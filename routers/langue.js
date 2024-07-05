const express = require('express');
const router = express.Router();
const LangueModel = require('../models/langueModel');


router.get('/langue', async (req, res) => {
const langue = await LangueModel.find({});
res.json(langue)
})

router.post('/langue', async (req, res) => {
    const langue = req.body
   await LangueModel.create(langue)
   res.json({message:`la langue ${langue.language} a bien été ajoutée`});

})

router.delete('/langue/:id', async (req, res) => {
    const {id} = req.params;
    const langue = await LangueModel.findById(id);
    
    await LangueModel.findByIdAndDelete(id);
    res.json({message:`la langue ${langue.language} a bien été supprimée`});
})

router.patch('/langue/:id', async (req, res) => {
    const {id} = req.params;
    const {language, level} = req.body;
    const updatedLangue = await LangueModel.findByIdAndUpdate(id, {language, level}, {new: true});
    res.json(updatedLangue);
})

router.get('/langue/:id', async (req, res) => {
    const {id} = req.params;
    const langue = await LangueModel.findById(id);
    res.json(langue);
})

module.exports = router