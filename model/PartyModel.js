const mongoose = require('mongoose');

const { Schema } = mongoose;

const partySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  platform: {
    type: String,
    required: true
  },
  // Other party information
  // Add more fields as needed
});

const PartyModel = mongoose.model('Party', partySchema);

module.exports = PartyModel;