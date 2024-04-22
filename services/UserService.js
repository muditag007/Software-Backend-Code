const UserModel = require('./model/UserModel');

class UserService {
  static async registerUser(userId) {
    try {
      const newUser = new UserModel({ userId });
      return await newUser.save();
    } catch (error) {
      throw error;
    }
  }

  // Implement other user-related operations as needed
}

module.exports = UserService;