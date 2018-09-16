const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {Time, validate} = require('../models/time');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
//const asyncMIddleware = require('../middleware/async');


//Get all times
router.get('/', auth,  async (req, res,) => {
       // throw new Error({error:'Error'});
        const times = await Time.find().sort('symbol');
        res.send(times);
    });

//Get a time by id
router.get('/:id', auth, async (req,res) =>{
    const time = await Time.findById(req.params.id);
     //check if there is any error
     if(!time) return res.status(400).send('The time with the given symbol is not valid');
    res.send(time);
});

router.put('/:id',auth,async (req,res) =>{
     //validate the input
     const {error} = validate(req.body);
     //check if there is any error
     if(error) return res.status(400).send(error.details[0].message);
    const time = await Time.findByIdAndUpdate(req.params.id,{
                 symbol: req.body.symbol,

                },{
        new: true
    });

    if(!time) return res.status(404).send('The tiem does not exists'); 
    res.send(time);
});

router.post('/', auth, async (req,res) =>{

    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let time = new Time({
        date: req.body.date,
        order: req.body.order,
        client: req.body.client,
        description: req.body.description,
        time:req.body.time
    });
    time = await time.save();
    res.send(time);
});

router.delete('/delete/:id',[auth,admin], async (req,res) =>{
    const time = await Time.findByIdAndRemove(req.params.id);
    if(!time) return res.status(404).send('The time was not found');
    res.send(time);
});

module.exports = router;