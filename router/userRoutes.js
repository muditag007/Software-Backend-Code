const express = require('express')
const router = express.Router()
const UserController = require('../controller/UserController')

router.get('/:userId', UserController.getUserById)
// Define other user-related routes as needed

module.exports = router
