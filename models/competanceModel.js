const mongoose = require('mongoose');

const competanceSchema = mongoose.Schema({
    skills : {
        type: String,

    }
})
 const Competence = mongoose.model('Competance', competanceSchema);
 module.exports = Competence