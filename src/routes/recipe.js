const express = require('express')
const router = express.Router()

const { RecipeSchema } = require('../validation/RecipeSchema')
const RecipeControler = require('../controllers/RecipeController')

router.get('/', RecipeSchema, RecipeControler.index)

module.exports = router
