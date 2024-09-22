// Dependence
const mongoose = require('mongoose');

// TODO: complete atmosphere
// schema design
const atmosphereSchema = mongoose.Schema({
    airType: {
        type: String,
        trim: true,
        required: [true, "Please Provide air type."],
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
    plant: {
        type: Array,
        trim: true,
        required: [true, "Please Provide plant type."]
    },
    benefits: {
        type: String,
        trim: true,
        required: [true, "Please Provide benefit message"]
    }
});

// exports
const Atmosphere = mongoose.model('Atmosphere', atmosphereSchema);
module.exports = Atmosphere;