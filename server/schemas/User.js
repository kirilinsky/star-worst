const { Schema, model } = require('mongoose')



const User = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: { type: String, required: true },
    roles: [{
        type: String, ref: 'Role'
    }],
    achieves: { type: Array, default: [] },
    storage: { type: Array, default: [] },

}, { timestamps: true })


module.exports = model("User", User)