const { celebrate, Segments, Joi } = require('celebrate')

exports.RecipeSchema = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    i: Joi.string().trim().required().messages({
      'string.base': '{#label} não é uma string',
      'string.empty': '{#label} não pode ser vazia',
      'any.required': '{#label} é necessária'
    }),
    q: Joi.string().trim().required().messages({
      'string.base': '{#label} não é uma string',
      'string.empty': '{#label} não pode ser vazia',
      'any.required': '{#label} é necessária'
    })
  })
})
