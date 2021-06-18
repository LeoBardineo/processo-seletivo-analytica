const express = require('express')
const router = express.Router()

const RecipeControler = require('../controllers/RecipeController')

router.get('/', RecipeControler.index)

module.exports = router
