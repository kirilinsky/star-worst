const mongoose = require('mongoose')
const Schema = mongoose.Schema
const crypto = require('crypto');
 

const UserSchema = new Schema({
    name: String,
    hash: String,
    salt: String,
    storage: Array


}, {timestamps : true})

UserSchema.methods.setPassword = function (password) {


    this.salt = crypto.randomBytes(16).toString('hex');


    this.hash = crypto.pbkdf2Sync(password, this.salt,
        800, 64, `sha512`).toString(`hex`);
};

UserSchema.methods.validPassword = function (password) {
    var hash = crypto.pbkdf2Sync(password,
        this.salt, 800, 64, `sha512`).toString(`hex`);
    return this.hash === hash;
};

module.exports = mongoose.model("User", UserSchema)