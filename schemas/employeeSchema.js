const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({ 
    Full_name: {
        required: true,
        type: String
    },
    Auth_level: {
        required: true,
        type: String
    },
    DOB: {
        required: true,
        type: Date
    },
    Address: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model('employeeSchema', employeeSchema);