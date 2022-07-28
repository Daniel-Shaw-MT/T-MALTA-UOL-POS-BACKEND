const mongoose = require('mongoose');

const transactionsSchema = new mongoose.Schema({ 
    Customer_ID: {
        required: true,
        type: String
    },
    Date: {
        required: true,
        type: Date
    },
    Money_spent: {
        required: true,
        type: Number
    },
    Method_of_payment: {
        required: true,
        type: String
    },
    Items_bought: {
        required: true,
        type: String
    },
    Employee_ID: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model('transactionsSchema', transactionsSchema);