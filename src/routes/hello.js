const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({ hello: 'Olá mundo! Sou eu, Leonardo de Melo Soares!' })
})

module.exports = router
