const auth = require('../middleware/auth');
const bcrypt = require('bcrypt');
const _= require('lodash');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const {Order, validate} = require('../models/order');
const asyncMIddleware = require('../middleware/async');

//Register a new Order
router.post('/', async (req,res) =>{

    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
   
    let order = new Order({orderId:req.body.orderId,
                           date:req.body.date,
                           client:req.body.client,
                           project:req.body.project,
                           description:req.body.description,
                           isBilled:req.body.isBilled,
                           status:req.body.status
                        });
    
    order = await order.save();
    res.send(order);
});

//Get a order by id
router.get('/me',auth, async (req,res) =>{
   
    const users = await User.findById(req.user._id).select('-password');
    res.send(users);
});

module.exports = router;