require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

const connectDB = require('./util/db.js')
const UserRouter = require('./routes/users.js')
const ProductRouter = require('./routes/products.js')

require('colors')

const server = express()
server.use(cors())
server.use(helmet())
server.use(morgan('dev'))
server.use(express.json())

connectDB()

let currentTime = new Date().toLocaleString('en-US', {
  timeZone: 'America/Denver',
})

server.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: `Server is running on port ${PORT}`,
    dataTime: currentTime + ' MST',
    author: 'Github: @MrZacSmith',
  })
})

server.use('/api/users', UserRouter)
server.use('/api/products', ProductRouter)

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
  console.log(`\n** Server is listening on port ${PORT}`.rainbow)
})
