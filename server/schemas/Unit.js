const { Schema, model } = require('mongoose')


const Unit  = new Schema({
    name: String,
    damage: Number,
    price: Number,
    img: String,
    health: Number


}, { timestamps: true })

module.exports = model("Unit", Unit)