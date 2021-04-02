const Router = require('express')
const userController = require('../controllers/userController')

const router = new Router()
const authMiddleware = require('../authMiddleware')

/* routes */


router.get('/get', authMiddleware, userController.getUser)


module.exports = router