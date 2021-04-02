const Router = require('express')
const perksController = require('../controllers/perksController')

const router = new Router()
const authMiddleware = require('../authMiddleware')

/* routes */


router.get('/getAll', authMiddleware, perksController.getAllPerksByUnitId)


module.exports = router