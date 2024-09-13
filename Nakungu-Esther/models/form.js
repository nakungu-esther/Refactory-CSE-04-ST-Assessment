const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    fullName: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        trim: true,
    },
    dob: {
        type: Date,
        trim: true,
    },
    nationality: {
        type: String,
        trim: true,
    },
    phone: {
        type: Number,
        trim: true,
    },
    email: {
        type:String,
        trim: true,
    },
    pobox: {
        type: String,
        trim: true,
    },
    emergencyPhone: {
        type: Number,
        trim: true,
    },
    passport: {
        type: String,
        trim: true,
    },
    visa: {
        type: String,
        trim: true,
    },
    departure: {
        type: String,
        trim: true,
    },
    destination: {
        type: String,
        trim: true,
    }

})


module.exports = mongoose.model('Form', formSchema);