const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registrationSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    
    mname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },

});


const Registration = mongoose.model('registration_details', registrationSchema);
module.exports = Registration;
