const Pedosphere = require('../models/Pedosphere.model');

// create new soil data
exports.addSoilService = async (data) => {
    const result = await Pedosphere.create(data);
    return result;
}

// get All soil
exports.getAllSoilService = async () => {
    const result = await Pedosphere.find({});
    return result;
}

// get one soil by id
exports.getSoilByIdService = async (soilId) => {
    const result = await Pedosphere.findOne({ _id: soilId });
    return result;
}

// update soil by Id
exports.updateSoilByIdService = async (soilId, data) => {
    const result = await Pedosphere.updateOne({ _id: soilId }, data);
    return result;
};

// delete soil by id
exports.deleteSoilByIdService = async (soilId) => {
    const result = await Pedosphere.deleteOne({ _id: soilId });
    return result;
}