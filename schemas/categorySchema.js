const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({ 
    Description: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model('categorySchema', categorySchema);