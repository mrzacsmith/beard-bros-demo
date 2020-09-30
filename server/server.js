const express = require('express')
const products = require('./data/products.js')

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
  console.log(`\n** Server is listening on port ${PORT}`)
})
