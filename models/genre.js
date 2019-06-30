var mongoose = require('mongoose');

var genreSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    date_created:{
        type : Date,
        default : Date.now()
    }
})

var Genre = module.exports = mongoose.model('Genre' , genreSchema);
