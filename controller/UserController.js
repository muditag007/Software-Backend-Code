const UserService = require('../services/UserService')

exports.getUserById = async (req, res, next) => {
  try {
    const { userId } = req.params
    const user = await UserService.getUserById(userId)
    if (!user) {
      res.status(404).json({ status: false, message: 'User not found' })
    } else {
      res.json({ status: true, user })
    }
  } catch (error) {
    next(error)
  }
}
