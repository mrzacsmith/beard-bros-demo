const users = require('./data/users.js')
const products = require('./data/products.js')

const User = './models/UserModel.js'
const Product = './models/ProductModel.js'
const Order = './models/OrderModel.js'
const connectDB = require('./config/connectDB.js')

require('colors')
require('dotenv').config()

connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUser = await User.insertMany(users)
    const adminUser = createdUser[0]._id

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })

    await Product.insertMany(sampleProducts)
    console.log('Data Imported:'.green)
    process.exit()
  } catch (error) {
    console.error(`Error: ${error}`.red)
    process.exit(1)
  }
}
const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed:'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`Error: ${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
