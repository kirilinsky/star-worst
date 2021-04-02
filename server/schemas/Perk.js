const { Schema, model } = require('mongoose')


const Perk = new Schema({
    name: String,
    host: String,
    damageMultiplier: Number,
    price: Number,
    img: String,
    healthMultiplier: Number,
    description: String

}, { timestamps: true })

module.exports = model("Perk", Perk)