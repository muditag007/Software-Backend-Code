const PartyModel = require('./model/PartyModel');

class PartyService {
  static async getAllParties() {
    try {
      return await PartyModel.find();
    } catch (error) {
      throw error;
    }
  }

  // Implement other party-related operations as needed
}

module.exports = PartyService;