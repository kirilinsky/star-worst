const Router = require('express')
const authController = require('./authController')

const router = new Router()


/* routes */

router.post('/signup', authController.registration)
router.post('/login', authController.login)
router.get('/users', authController.getUsers)



module.exports = router