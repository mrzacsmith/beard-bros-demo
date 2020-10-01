const express = require('express')
const products = require('./data/products.js')

const connectDB = require('./config/connectDB.js')

require('colors')
require('dotenv').config()

connectDB()
const server = express()

server.get('/', (req, res) => {
  res.send('API is running')
})

server.get('/api/products', (req, res) => {
  res.json(products)
})

server.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

const PORT = process.env.PORT || 3555

server.listen(PORT, () => {
  console.log(
    `\n** Server is in ${process.env.NODE_ENV} mode, listening on port ${PORT}`
      .rainbow
  )
})
