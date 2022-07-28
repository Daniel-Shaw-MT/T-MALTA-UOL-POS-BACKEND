const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    catID: {
        required: false,
        type: String
    },
    Name: {
        required: true,
        type: String
    },
    Price: {
        required: true,
        type: Number
    },
    Purchase_Price: {
        required: true,
        type: Number
    },
    Serial_Number: {
        required: false,
        type: String
    },
    Dimensions: {
        required: false,
        type: String
    },
    Description: {
        required: false,
        type: String
    },
    Offer_ID: {
        required: false,
        type: Number
    }
})

module.exports = mongoose.model('productSchema', productSchema);