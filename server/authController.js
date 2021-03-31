/* schemas */
const User = require('./schemas/User')
const Role = require('./schemas/Role')
const Unit = require('./schemas/Unit')
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')


const secret = process.env.SECRET_KEY


/* jwt */
const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, { expiresIn: '11h' })
}

class authController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if (errors.isEmpty()) {
                return res.status(400).json({ message: 'errors with validation' })
            }
            const { email, name, password } = req.body
            const candidate = await User.findOne({ email })
            if (candidate) {
                return res.status(400).json({ message: 'user with this email already exist, try another' })
            }
            const hashPass = await bcrypt.hashSync(password, 5)
            const userRole = await Role.findOne({ value: 'USER' })
            const user = new User({ email, name, password: hashPass, roles: [userRole.value] })
            await user.save()
            return res.json({ message: 'success' })
        }
        catch (e) {
            console.log(e);
            res.status(400).json({ message: 'registration error' })
        }
    }
    async login(req, res) {
        try {
            const { email, password } = req.body
            const user = await User.findOne({ email })
            if (!user) {
                return res.status(400).json({ message: 'user with this email has not exist' })
            }
            const validPass = bcrypt.compareSync(password, user.password)
            if (!validPass) {
                return res.status(400).json({ message: 'incorrect password' })
            }
            const token = generateAccessToken()

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