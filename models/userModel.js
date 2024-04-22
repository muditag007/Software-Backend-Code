const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobileNumber: String,
    dob: String,
    voted: Boolean
});

const User = mongoose.model('User', userSchema);

module.exports = User;
