// Dependence
const mongoose = require('mongoose');


// schema design
const pedosphereSchema = mongoose.Schema({
    soilType: {
        type: String,
        trim: true,
        required: [true, "Please Provide soil type."],
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
const Pedosphere = mongoose.model('Pedosphere', pedosphereSchema);
module.exports = Pedosphere;
