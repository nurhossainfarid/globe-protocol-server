const Hydrosphere = require('../models/Hydrosphere.model');

// create new soil data
exports.addPondService = async (data) => {
    const result = await Hydrosphere.create(data);
    return result;
}

// get All soil
exports.getAllPondService = async () => {
    const result = await Hydrosphere.find({});
    return result;
}

// get one soil by id
exports.getPondByIdService = async (pondId) => {
    const result = await Hydrosphere.findOne({ _id: pondId });
    return result;
}

// update soil by Id
exports.updatePondByIdService = async (pondId, data) => {
    const result = await Hydrosphere.updateOne({ _id: pondId }, data);
    return result;
};

// delete soil by id
exports.deletePondByIdService = async (pondId) => {
    const result = await Hydrosphere.deleteOne({ _id: pondId });
    return result;
}