const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {User, validate} = require('../models/user');



router.post('/', async (req,res) =>{
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let user = await User.findOne({email: req.body.email});
    if (error) return res.status(400).send('User already register.');

    let user = new User({
        id: req.body.id,
        name: req.body.name,
        last: req.body.last,
        salary: req.body.salary,
        description: req.body.description,
        email: req.body.email,
        password: req.body.password,
        time:req.body.time
    });
    
    user = await user.save();
    res.send(user);
});

/*
//Get all times
router.get('/', async (req,res) =>{
    const users = await User.find().sort('symbol');
    res.send(users);
});


//Get a user by id
router.get('/:id',async (req,res) =>{
    const users = await User.findById(req.params.id);
     //check if there is any error
     if(!users) return res.status(400).send('The user with the given symbol is not valid');
    res.send(users);
});

router.put('/:id',async (req,res) =>{
     //validate the input
     const {error} = validate(req.body);
     //check if there is any error
     if(error) return res.status(400).send(error.details[0].message);
    const user = await User.findByIdAndUpdate(req.params.id,{ symbol: req.body.symbol},{
        new: true
    });

    if(!user) return res.status(404).send('The user does not exists');
   
    res.send(user);
});

router.post('/',async (req,res) =>{
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = new User({
        id: req.body.id,
        name: req.body.name,
        last: req.body.last,
        salary: req.body.salary,
        description: req.body.description,
    });
    user = await user.save();
    res.send(user);
});

router.delete('/delete/:id',async (req,res) =>{
    const user = await User.findByIdAndRemove(req.params.id);
    if(!user) return res.status(404).send('The time was not found');
    res.send(user);
});
*/
module.exports = router;