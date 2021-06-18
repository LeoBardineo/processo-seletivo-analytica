const axios = require('axios')

exports.index = async (req, res, next) => {
  try {
    const ingredients = req.query.i
    const query = req.query.q

    if (query === undefined || query === '' || ingredients === undefined || ingredients === '') {
      const error = new Error('Faltando argumentos i (ingredients) ou q (query).')
      error.status = 400
      return next(error)
    }

    const url = encodeURI(`http://www.recipepuppy.com/api/?i=${ingredients}&q=${query}`)
    const response = await axios.get(url)

    const results = []
    const ingredientsArray = ingredients.split(',')

    response.data.results.slice(0, 3).forEach((recipe) => {
      const recipeResult = {}
      recipeResult.recipe = recipe.title
      recipeResult.url = recipe.href
      recipeResult.ingredients = recipe.ingredients
      results.push(recipeResult)
    })

    const statusCode = (results.length) ? 200 : 404

    res.status(statusCode).json({
      query,
      ingredients: ingredientsArray,
      results
    })
  } catch (err) {
    const error = new Error(err)
    error.status = 500
    return next(error)
  }
}
