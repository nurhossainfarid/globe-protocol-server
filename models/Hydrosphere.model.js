// Dependence
const mongoose = require('mongoose');

// schema design
const hydrosphereSchema = mongoose.Schema({
    pondType: {
        type: String,
        trim: true,
        required: [true, "Please Provide pond type."],
    },
    description: {
        type: String,
        trim: true,
    },
    temperature: {
        type: String,
        trim: true,
        required: [true, "Please Provide temperature."],
    },
    pH: {
        type: String,
        trim: true,
        required: [true, "Please Provide pH."],
    },
    dissolvedOxygen: {
        type: String,
        trim: true,
        required: [true, "Please Provide dissolved oxygen quantity."],
    },
    plants: {
        type: Array,
        trim: true,
        required: [true, "Please Provide plant type."]
    },
    fishes: {
        type: Array,
        trim: true,
        required: [true, "Please Provide fish type."]  
    }
});

// exports
const Hydrosphere = mongoose.model('Hydrosphere', hydrosphereSchema);
module.exports = Hydrosphere;