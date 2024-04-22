const mongoose = require('mongoose');

const { Schema } = mongoose;

const voteSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  partyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Party',
    required: true
  }
});

const VoteModel = mongoose.model('Vote', voteSchema);

module.exports = VoteModel;
