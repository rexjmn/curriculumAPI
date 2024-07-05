const mongoose = require('mongoose');
const experianceProSchema = mongoose.Schema({
    company: {
        type: String
    },
    position: {
        type: String
    },
    date: {
        type: String
    },
    description: {
        type: String
    },
})
const ExperiancePro = mongoose.model('ExperiancePro', experianceProSchema);
module.exports = ExperiancePro