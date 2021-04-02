/* schemas */
const User = require('../schemas/User')



class userController {
    async getUser(req, res) {
        try {
            const currentUser = req.user
            let { achieves, storage, bitcoin, capital, email, name, createdAt } = await User.findOne({ _id: currentUser.id })

            return res.json({ achieves, storage, bitcoin, capital, email, name, createdAt })
        }
        catch (e) {
            return res.status(400).json({ message: 'get users error ' })
        }
    }
}

module.exports = new userController()