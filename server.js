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
  res.status(error.status || 500).json({
    error: {
      message: error.message || 'Algo deu muito errado'
    }
  })
})

app.listen(port)
