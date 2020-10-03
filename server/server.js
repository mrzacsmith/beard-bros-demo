const express = require('express')

const connectDB = require('./config/connectDB.js')
const productsRouter = require('./routes/productsRouter.js')
const usersRouter = require('./routes/userRouter.js')

require('colors')
require('dotenv').config()

connectDB()
const server = express()

server.use('/api/products', productsRouter)
server.use('/api/users', usersRouter)

server.get('/', (req, res) => {
  res.send('API is running')
})

const PORT = process.env.PORT || 3555

server.listen(PORT, () => {
  console.log(
    `\n** Server is in ${process.env.NODE_ENV} mode, listening on port ${PORT}`
      .rainbow.bold
  )
})
