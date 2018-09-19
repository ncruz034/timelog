const auth = require('../middleware/auth');
const bcrypt = require('bcrypt');
const _= require('lodash');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const {Order, validate} = require('../models/order');
const asyncMIddleware = require('../middleware/async');

//Register a new Order; this route should be protected to only admin users.
router.post('/', auth, async (req,res) =>{

    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
   
    let order = new Order({
                           orderId:req.body.orderId,
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

//Get all orders
router.get('/projects', auth, async (req, res,) => {
    // throw new Error({error:'Error'});
     const orders = await Order.find().sort('date');
    
     res.send(orders);
 });

//Get all orders
router.get('/', auth, async (req, res,) => {
    // throw new Error({error:'Error'});
     const orders = await Order.find().sort('date');
     res.send(orders);
 });

//Get an order by id
router.get('/:id', auth, async (req,res) =>{
 const order = await Order.findById(req.params.id);
  //check if there is any error
  if(!order) return res.status(400).send('The order with the given id is not valid');
 res.send(order);
});

module.exports = router;