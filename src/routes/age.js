const express = require('express')
const router = express.Router()

const AgeController = require('../controllers/AgeController')

router.post('/', AgeController.index)

module.exports = router
