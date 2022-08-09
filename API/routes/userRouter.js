const router = require('express').Router()
const userCtrl = require('../controler/UsetCtr')


router.get('/users/login/:name', userCtrl.getUser)
router.get('/users/:id/:role', userCtrl.getAllUser)


module.exports = router