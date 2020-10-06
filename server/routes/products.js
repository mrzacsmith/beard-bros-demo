const router = require('express').Router()
const asyncHandler = require('express-async-handler')
const Product = require('../models/Products.js')

// @desc    Test end is working
// @route   /test
router.get('/test', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Server is running',
  })
})

// @desc    Get all products
// @route   GET /
router.get(
  '/',
  asyncHandler(async (req, res) => {
    // Product.find(req.query)
    //   .then((products) => res.json(products))
    //   .catch((err) => res.status(400).json(`Error: ${err}`))
    const products = await Product.find({})

    res.json(products)
  })
)

// @desc    Get a product by id
// @route   GET /:id
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
  })
)

// @desc    Add a new product
// @route   POST /
router.post('/', (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
    brand: req.body.brand,
    category: req.body.category,
    price: req.body.price,
    countInStock: req.body.countInStock,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
  })
})

// @desc    Update a product by id
// @route   PATCH /:id

// @desc    Remove a product by id
// @route   DELETE /:id

module.exports = router
