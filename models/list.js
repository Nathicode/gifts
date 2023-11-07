const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ListSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});
const Winner = mongoose.model('Winners', ListSchema);
module.exports = Winner;