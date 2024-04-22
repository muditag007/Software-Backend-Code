const express = require('express');
const router = express.Router();
const userController = require('./userController');
const partyController = require('./partyController');
const votingController = require('./votingController');

// Define routes
const User = require('./models/userModel');

// Fetch all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// router.get('/users/:userId', userController.getUserById);
// router.post('/users', userController.createUser);
// router.get('/parties', partyController.getAllParties);
// router.post('/vote', votingController.vote);

module.exports = router;
