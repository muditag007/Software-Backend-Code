const VoteModel = require('./model/VoteModel')

class VoteService {
  static async castVote (userId, partyId) {
    try {
      const newVote = new VoteModel({ userId, partyId })
      return await newVote.save()
    } catch (error) {
      throw error
    }
  }

  // Implement other vote-related operations as needed
}

module.exports = VoteService
