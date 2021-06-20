const { celebrate, Segments, Joi } = require('celebrate')

exports.AgeSchema = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().trim().required().messages({
      'string.base': '{#label} não é uma string',
      'string.empty': '{#label} não pode ser vazia',
      'any.required': '{#label} é necessária'
    }),
    birthdate: Joi.string().trim().pattern(/\d{4}(-\d{2}){2}/).required().messages({
      'string.pattern.base': '{#label} não segue o formato YYYY-MM-DD',
      'string.base': '{#label} não é uma string',
      'string.empty': '{#label} não pode ser vazia',
      'any.required': '{#label} é necessária'
    }),
    date: Joi.string().trim().pattern(/\d{4}(-\d{2}){2}/).required().messages({
      'string.pattern.base': '{#label} não segue o formato YYYY-MM-DD',
      'string.base': '{#label} não é uma string',
      'string.empty': '{#label} não pode ser vazia',
      'any.required': '{#label} é necessária'
    })
  })
})
