const mongoose = require("mongoose");

const bukuSchema = new mongoose.Schema({
    nama: {type: String, require : true},
    umur : {type: Number, require : true},
    jurusan : [{type: String, require : true}]
});


module.exports = mongoose.model("Pariwisata", PariwisataSchema);