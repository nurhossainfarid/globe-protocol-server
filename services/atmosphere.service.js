const Atmosphere = require('../models/Atmosphere.model');

// create new soil data
exports.addAirService = async (data) => {
    const result = await Atmosphere.create(data);
    return result;
}

// get All air
exports.getAllAirService = async () => {
    const result = await Atmosphere.find({});
    return result;
}

// get one air by id
exports.getAirByIdService = async (airId) => {
    const result = await Atmosphere.findOne({ _id: airId });
    return result;
}

// update air by Id
exports.updateAirByIdService = async (airId, data) => {
    const result = await Atmosphere.updateOne({ _id: airId }, data);
    return result;
};

// delete air by id
exports.deleteAirByIdService = async (airId) => {
    const result = await Atmosphere.deleteOne({ _id: airId });
    return result;
}