const mongoose = require('mongoose')
require('colors')

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    console.log(`** MongoDB Connected: ${connect.connection.host}`.rainbow)
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectDB
