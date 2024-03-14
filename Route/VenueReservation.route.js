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


router.get('/', async (req, res, next) => {
    try {
       
        const result = await VenueReservation.find({}, {__v:0});
        res.send(result);
    } catch (error) {
        res.send(error.message);
        
    }
});


router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
       
        const result = await VenueReservation.findById(id);
        res.send(result);
    } catch (error) {
        res.send(error.message);
        
    }
});


router.patch('/:id', async (req, res, next) => {
    

    try {
        const id = req.params.id;
        const updates = req.body;
        const result = await VenueReservation.findByIdAndUpdate(id, updates);
        res.send(result);
    } catch (error) {
        res.send(error.message);
        
    }
});


router.delete('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
       
        const result = await VenueReservation.findByIdAndDelete(id);
        res.send(result);
    } catch (error) {
        res.send(error.message);
        
    }
});


module.exports = router;