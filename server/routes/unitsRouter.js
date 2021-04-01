const Router = require('express')
const unitsController = require('../controllers/unitsController')

const router = new Router()
const authMiddleware = require('../authMiddleware')

/* routes */


router.get('/getAll', unitsController.getUnits)
router.post('/buy', authMiddleware, unitsController.buyUnit)


module.exports = router