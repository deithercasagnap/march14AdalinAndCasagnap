const express = require('express');
const router = express.Router();


const Registration = require('../Model/Registration.model');

router.post('/', async (req, res, next) => {
    try {
        const register = new Registration(req.body);
        const result = await register.save();
        res.send(result);
    } catch (error) {
        res.send(error.message);
        
    }
});


router.get('/', async (req, res, next) => {
    try {
       
        const result = await Registration.find({}, {__v:0});
        res.send(result);
    } catch (error) {
        res.send(error.message);
        
    }
});


router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
       
        const result = await Registration.findById(id);
        res.send(result);
    } catch (error) {
        res.send(error.message);
        
    }
});



router.patch('/:id', async (req, res, next) => {
    

    try {
        const id = req.params.id;
        const updates = req.body;
        const result = await Registration.findByIdAndUpdate(id, updates);
        res.send(result);
    } catch (error) {
        res.send(error.message);
        
    }
});



router.delete('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
       
        const result = await Registration.findByIdAndDelete(id);
        res.send(result);
    } catch (error) {
        res.send(error.message);
        
    }
});



module.exports = router;