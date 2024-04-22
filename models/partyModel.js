const mongoose = require('mongoose');

const partySchema = new mongoose.Schema({
    // Define party schema fields
});

const Party = mongoose.model('Party', partySchema);

module.exports = Party;
