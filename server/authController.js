/* schemas */
const User = require('./schemas/User')
const Role = require('./schemas/Role')
const Unit = require('./schemas/Unit')
const bcrypt = require('bcryptjs')
class authController {
    async registration(req, res) {
        try {
            const { name, password } = req.body
            const candidate = User.findOne({ name })
            if (candidate) {
                return res.status(400).json({ message: 'name already exist, try another' })
            }
            const user = new User({ name })

        }
        catch (e) {
            console.log(e);
            res.status(400).json({ message: 'registration error' })
        }
    }
    async login(req, res) {
        try {

        }
        catch (e) {
            console.log(e);
            res.status(400).json({ message: 'login error' })
        }
    }
    async getUsers(req, res) {
        try {

            res.json('server is working now')
        }
        catch (e) {

        }
    }
}

module.exports = new authController()