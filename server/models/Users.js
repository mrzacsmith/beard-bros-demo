const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    isAdmin: { type: String, default: false },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', UserSchema)
