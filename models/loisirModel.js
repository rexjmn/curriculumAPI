const mongoose = require("mongoose");

const loisirSchema = new mongoose.Schema({
    loisir: {
        type: String,
    },
});
const Loisir = mongoose.model("Loisir", loisirSchema);
module.exports = Loisir