const mongoose = require('mongoose');
 
const note = new mongoose.Schema({
    Title: {
        type: String,
    },
    Subject:{
        type:String
    },
    Body:{
        type:String,
    }
})

module.exports = Note = mongoose.model('note',note);