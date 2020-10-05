require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

require('colors')

const server = express()
server.use(cors())
server.use(helmet())
server.use(morgan('dev'))
server.use(express.json())

server.get('/', (req, res) => {
  res.status(200).json({
    status: 'Success',
  })
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
  console.log(`\n** Server is listening on port ${PORT}`.rainbow)
})
