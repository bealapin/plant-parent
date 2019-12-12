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
        required: true,
    },
    light: {
        type: Array,
        required: true,
    },
    window: {
        type: Array,
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