const router = require('express').Router()
const User = require('../models/Users.js')

let currentTime = new Date().toLocaleString('en-US', {
  timeZone: 'America/Denver',
})

// @desc  Test route
// @route GET /test
router.get('/test', (req, res) => {
  res
    .status(200)
    .json(`User test route is running at /api/users/test at ${currentTime} MST`)
})

// @desc    Get all users
// @route   GET /
router.get('/', (req, res) => {
  User.find(req.query)
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

// @desc    Get user by id
// @route   GET /:id
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

// @desc    Add new user
// @route   POST /
router.post('/', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    isAdmin: req.body.isAdmin,
  })

  newUser
    .save()
    .then(() => res.json(newUser))
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

// @desc    Update user
// @route   PATCH /:id
router.patch('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id)
    .then((user) => {
      ;(user.name = req.body.name),
        (user.email = req.body.email),
        (user.rpassword = req.body.password),
        (user.isAdmin = req.body.isAdmin),
        user
          .save()
          .then(() => res.json(`User has been updated`))
          .catch((err) => res.status(400).json(`Error: $`))
    })
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

// @desc    Remove user by
// @route   DELETE /:id
router.delete('/:id', (req, res) => {
  User.findOneAndDelete(req.params.id)
    .then(() => res.json('User has been deleted'))
    .catch((err) => res.status(400).json(`Error: ${err}`))
})

module.exports = router
