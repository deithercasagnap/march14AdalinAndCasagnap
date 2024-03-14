const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const venue_reservationSchema = new Schema({
    checkIn: {
        type: Date
    },
    checkOut: {
        type: Date
    },
    name: {
        type: String
        
    },
    
    occasion: {
        type: String
    },
    numberOfGuest: {
        type: Number,
        required: true
    },
    reservationName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },

});

const Venue_reservation = mongoose.model('venue_reservation_details', venue_reservationSchema);
module.exports = Venue_reservation;