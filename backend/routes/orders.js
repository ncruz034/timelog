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
   
    console.log('Saving order');
    let order = new Order({
                           orderNumber:req.body.orderNumber,
                           //orderId:req.body.orderId,
                           date:req.body.date,
                           client:req.body.client,
                           project:req.body.project,
                           description:req.body.description,
                           isBilled:req.body.isBilled,
                           status:req.body.status
                        });
    
    order = await order.save();
    console.log('After saving order');
    res.send(order);
});

//Finds an order by _id, and returns all the times present in the order
router.get('/time/:order_id', async (req,res) =>{
    const order = await Order.findById(req.params.order_id).populate('time',['date', 'description', 'time']);
     if(!order) return res.status(400).send('The order with the given id is not valid');

    res.send(order.time);
});

/*
router.post('/time', async (req,res) =>{  
    const order = await Order.findById(req.body.order_id);
    if (!order) return res.status(400).send('No user found with provided id...');

    order.time.push(req.body.order_id);

   await order.save((error) =>{
       if(error){
           console.log(error);
       }else{
           res.send(order);
       }
   });
});
*/

//Finds an order by _id and adds a new time to the order.
router.post('/:order_id/time', async (req,res) =>{  
    const order = await Order.findById(req.params.order_id);
    if (!order) return res.status(400).send('No Order found with provided id...');

    order.time.push(req.body.time_id);
   await order.save((error) =>{
       if(error){
           console.log(error);
       }else{
           res.send(order);
       }
   });
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

//Get an order by orderNumber and returns the _id.
router.get('/number/:order_number', auth, async (req,res) =>{
    await Order.findOne({orderNumber: req.params.order_number }, function(err,order){
        //check if there is any error
        if(!order) return res.status(400).send('The order with the given order number is not valid');
        res.send(order._id);
    });
});

module.exports = router;