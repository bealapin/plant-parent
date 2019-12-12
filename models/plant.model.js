const mongoose = require('mongoose');
// const Schema = mongoose.Schema

const plantSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
    difficulty: {
        type: String,
        enumValues: ['easy', 'medium', 'advanced'],
        required: true,
    },
    light: {
        type: [String],
        required: true,
    },
    window: {
        type: [String],
        required: true,
    },
    image: {
        type: String,
        require: true,
    },
    pets: {
        type: Boolean,
    }

})

module.exports = mongoose.model('plants', plantSchema)