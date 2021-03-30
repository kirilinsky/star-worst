const mongoose = require('mongoose')
const Schema = mongoose.Schema
const crypto = require('crypto');
 

const UnitSchema = new Schema({
    name: String,
    damage: Number,
    price: Number,
    img: String,
    health: Number 


}, {timestamps : true})

module.exports = mongoose.model("Unit", UnitSchema)