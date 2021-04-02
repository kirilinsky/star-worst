const Router = require('express')
const unitsController = require('../controllers/unitsController')

const router = new Router()
const authMiddleware = require('../authMiddleware')

/* routes */


router.get('/getAll', unitsController.getUnits)
router.post('/get', unitsController.getUnit)
router.post('/buy', authMiddleware, unitsController.buyUnit)
router.post('/sell', authMiddleware, unitsController.sellUnit)


module.exports = router