// Dependence
const mongoose = require('mongoose');

// schema design
const hydrosphereSchema = mongoose.Schema({
    pondType: {
        type: String,
        trim: true,
        required: [true, "Please Provide pond type."],
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
    plant: {
        type: Array,
        trim: true,
        required: [true, "Please Provide plant type."]
    },
    fish: {
        type: Array,
        trim: true,
        required: [true, "Please Provide fish type."]  
    }
});

// exports
const Hydrosphere = mongoose.model('Hydrosphere', hydrosphereSchema);
module.exports = Hydrosphere;