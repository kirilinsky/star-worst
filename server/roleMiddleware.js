const jwt = require('jsonwebtoken')
require('dotenv').config();


const secret = process.env.SECRET_KEY
module.exports = (roles) => {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }

        try {
            const token = req.headers.authorization.split(' ')[1]

            if (!token) {
                return res.status(403).json({ message: 'user unauthorized' })
            }

            const { roles: userRoles } = jwt.verify(token, secret)

            if (!userRoles.some(x => roles.includes(x))) {
                return res.status(403).json({ message: 'dont enough credentials' })
            }
            next()
        }
        catch (e) {
            /*  console.log(e); */
            return res.status(403).json({ message: 'user unauthorized' })
        }
    }
}