const { Schema, model } = require('mongoose')


const Unit = new Schema({
    name: String,
    damage: Number,
    price: Number,
    img: String,
    health: Number,
    soldCount: Number,
    description: String

}, { timestamps: true })

module.exports = model("Unit", Unit)