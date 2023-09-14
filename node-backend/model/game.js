const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Game = new Schema({
    name:{
        type: String
    },
    price:{
        type: String
    },
    description:{
        type: String
    }
},{
    collection:'game'
})

module.exports = mongoose.model('Game', Game);