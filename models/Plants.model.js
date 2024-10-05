// Dependence
const mongoose = require('mongoose');

// schema design
const plantsSchema = mongoose.Schema({
    url: {
        type: String,
        trim: true,
        required: [true, "Please provide image url"],
    },
    name: {
        type: String,
        trim: true,
        required: [true, "Please provide plants name"],
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
    soilType: {
        type: String,
        trim: true,
        required: [true, "Please Provide soil type"],
    },
    available: {
        type: Array,
        trim: true,
        required: [true, "Please available area"]
    },
});

// exports
const Plants = mongoose.model('Plants', plantsSchema);
module.exports = Plants;