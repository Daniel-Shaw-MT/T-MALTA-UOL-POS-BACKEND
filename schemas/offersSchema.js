const mongoose = require('mongoose');

const offersSchema = new mongoose.Schema({ 
    Offer_description: {
        required: true,
        type: String
    },
    Start_date: {
        required: true,
        type: Date
    },
    End_date: {
        required: true,
        type: Date
    },
    Percent: {
        required: true,
        type: Number
    }
});

module.exports = mongoose.model('offersSchema', offersSchema);