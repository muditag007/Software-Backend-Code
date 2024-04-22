const express = require('express')
const router = express.Router()
const VoteController = require('./controller/VoteController')

router.post('/vote', VoteController.castVote)
// Define other vote-related routes as needed

module.exports = router
