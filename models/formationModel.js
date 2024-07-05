const mongoose = require('mongoose');


const formationSchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    date: {
        type: String
    },
    school: {
        type: String
    }
})
const Formation = mongoose.model('Formation', formationSchema);
module.exports = Formation