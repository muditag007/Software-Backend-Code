const PartyService = require('./services/PartyService');

exports.getAllParties = async (req, res, next) => {
  try {
    const parties = await PartyService.getAllParties();
    res.json({ status: true, parties });
  } catch (error) {
    next(error);
  }
};