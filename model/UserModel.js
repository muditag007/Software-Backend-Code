const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  // Unique identifier for users
  userId: {
    type: String,
    unique: true,
    required: true
  },
  // Other user information
  // Add more fields as needed
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;