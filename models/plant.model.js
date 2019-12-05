const mongoose = require('mongoose');
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');

const plantSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
    type: {
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
module.exports = mongoose.model('plant', plantSchema);

