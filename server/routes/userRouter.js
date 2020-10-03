const router = require('express').Router()
const User = require('../models/Users.js')

// @desc    Return all users
// @route   GET /api/users
// @access
router.get('/', (req, res) => {
  User.find(req.query)
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error`))
})

// @desc    Return a user
// @route   GET /api/users/:id
// @access

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json(`Error`))
})

// @desc    Add a new user
// @route   POST /api/users
// @access
router.post('/', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    isAdmin: req.body.isAdmin,
  })
  console.log('new user', newUser)
  newUser
    .save()
    .then(() => res.json(newUser))
    .catch((err) => res.status(400).json(`Error`))
})

// @desc    GET all users
// @route   /api/users
// @access

// @desc    GET all users
// @route   /api/users
// @access

module.exports = router
