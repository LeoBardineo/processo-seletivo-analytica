const express = require('express')
const router = express.Router()

const { AgeSchema } = require('../validation/AgeSchema')
const AgeController = require('../controllers/AgeController')

router.post('/', AgeSchema, AgeController.index)

module.exports = router
