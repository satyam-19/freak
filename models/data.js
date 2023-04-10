const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone:{
        type:String,
        required: true
    },
    gender:{
        type:String,
        required: true
    },
    lang:{
        type:String,
        required: true
    },
    agree:{
        type:String,
        required: true
    },
});

const Data = mongoose.model('Data',dataSchema);

module.exports = Data;