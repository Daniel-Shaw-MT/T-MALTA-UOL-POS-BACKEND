const mongoose = require('mongoose');

const loyaltySchema = new mongoose.Schema({ 
    Customer_ID: {
        required: true,
        type: String
    },
    Discount_Percentage: {
        required: true,
        type: Number
    }
});

module.exports = mongoose.model('loyaltySchema', loyaltySchema);


