const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

// CORS
app.use(cors())

// Log requests
app.use(morgan('dev'))

// Body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Routes
const helloRoutes = require('./src/routes/hello')
const recipeRoutes = require('./src/routes/recipe')
const ageRoutes = require('./src/routes/age')
const { isCelebrateError } = require('celebrate')

app.use('/hello', helloRoutes)
app.use('/recipe', recipeRoutes)
app.use('/age', ageRoutes)

// Endpoint inexistente
app.use((req, res, next) => {
  const error = new Error('Rota não encontrada')
  error.status = 404
  next(error)
})

// Tratamento de erro
app.use((error, req, res, next) => {
  if (!isCelebrateError(error)) {
    return next(error)
  }

  const err = Object.fromEntries(error.details)

  res.status(400).json({
    error: {
      details: err.query !== undefined
        ? err.query.details[0]
        : err.body.details[0]
    }
  })
})

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      details: {
        message: error.message || 'Algo deu muito errado'
      }
    }
  })
})

app.listen(port)
