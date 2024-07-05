const express = require('express');
const router = express.Router();
const Contact = require('../models/contactModel');


router.get('/contact', async (req, res) => {
const contact = await Contact.find({});
res.json(contact)
})

router.post('/contact', async (req, res) => {
    const newContact = req.body
    await Contact.deleteOne()
    await Contact.create(newContact)
    res.json(newContact)
})

module.exports = router