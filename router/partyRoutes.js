const express = require('express');
const router = express.Router();
const PartyController = require('./controller/PartyController');

router.get('/parties', PartyController.getAllParties);
// Define other party-related routes as needed

module.exports = router;