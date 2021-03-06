const Router = require('express')
const perksController = require('../controllers/perksController')

const router = new Router()
const authMiddleware = require('../authMiddleware')

/* routes */


router.get('/getAll/:id', perksController.getAllPerksByUnitId)
router.post('/buy', authMiddleware, perksController.buyPerk)

module.exports = router