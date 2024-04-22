const VoteService = require('./services/VoteService')

exports.castVote = async (req, res, next) => {
  try {
    const { userId, partyId } = req.body
    await VoteService.castVote(userId, partyId)
    res.json({ status: true, message: 'Vote cast successfully' })
  } catch (error) {
    next(error)
  }
}
