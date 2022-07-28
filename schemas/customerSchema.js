const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({ 
    Full_name: {
        required: true,
        type: String
    },
    Address: {
        required: false,
        type: String
    },
    DOB: {
        required: false,
        type: Date
    },
    Telephone_no: {
        required: true,
        type: Number
    },
    Money_spent: {
        required: false,
        type: Number
    },
    Loyalty_card_ID: {
        required: false,
        type: Number
    }
});

module.exports = mongoose.model('customerSchema', customerSchema);