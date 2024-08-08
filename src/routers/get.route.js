const express = require('express')
const router = express.Router()
const controller = require('../controllers/get.controller')
router.get("/", controller.getController)
module.exports = router