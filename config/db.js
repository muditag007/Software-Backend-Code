const mongoose = require('mongoose')

const connection = mongoose.connect(
  'mongodb+srv://muditag007:testingpassword@testing.qnxwvha.mongodb.net/?retryWrites=true&w=majority',
  () => console.log('Connected!!')
)

module.exports = connection
