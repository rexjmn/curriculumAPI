const mongoose = require("mongoose");
const langueSchema = new mongoose.Schema({
    language: {
        type: String

    },
    level: {
        type: String
    },
});
const Langue = mongoose.model("Langue", langueSchema);
module.exports = Langue