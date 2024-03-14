const express = require('express');
const router = express.Router();


const VenueReservation = require('../Model/VenueReservation.model');

router.post('/', async (req, res, next) => {
    try {
        const reserve = new VenueReservation(req.body);
        const result = await reserve.save();
        res.send(result);
    } catch (error) {
        res.send(error.message);
        
    }
});

module.exports = router;