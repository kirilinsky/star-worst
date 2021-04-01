const Router = require('express')
const authController = require('./authController')
const { check } = require('express-validator')
const router = new Router()
const authMiddleware = require('./authMiddleware')
const roleMiddleware = require('./roleMiddleware')

/* routes */

router.post('/signup',
    [check('email', 'email has broken, try again').isEmail().notEmpty(),
    check('name', 'name required').not().isEmpty().trim(),
    check('password', 'password must be from 7 chars').isLength({ min: 7, max: 150 })
    ], authController.registration)
router.post('/login', authController.login)
router.get('/units', authController.getUnits)
router.get('/user', authMiddleware, authController.getUser)
router.get('/admin', roleMiddleware(['ADMIN']), authController.adminTest)


module.exports = router