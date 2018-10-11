const auth = require('../middleware/auth');
const bcrypt = require('bcrypt');
const _= require('lodash');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const {Order, validate} = require('../models/order');
const { Global } = require('../models/global');
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
    //const order = await Order.findById(req.params.order_id).populate('time',['date', 'user_name','description', 'time']);
    //const order = await Order.findById(req.params.order_id).populate({path:'time', model:'Time', select:['date','description','time']}).populate({path:'time', populate:{path:'user_id',model:"User"}});
    const order = await Order.findById(req.params.order_id).populate({path:'time', model:'Time', select:['date','description','time'],
                                                            populate:{path:'user',model:"User",select:['name','last']}});

    if(!order) return res.status(400).send('The order with the given id is not valid');

    res.send(order.time);
});

router.get('/last', async (req,res) =>{
    const currentOrderNumber = await Global.findOne();
    if(!currentOrderNumber) return res.status(400).send('There are no orders in the database');

    res.send(currentOrderNumber.currentOrderNumber);
})


router.put('/last/', async (req,res) =>{
    await Global.findOne({}, function(err, data){
        if(err){
            console.log(err);
            res.status(500).send();
        } else {
            if(!data){
                res.status(400).send('No orders in the system.');
            } else {
                if(req.body.currentOrderNumber){
                    data.currentOrderNumber = req.body.currentOrderNumber;
                    data.save(function(err,updatedData){
                        if(err){
                            console.log(err);
                            res.status(500).send();
                        } else {
                            res.send(data);
                        }
                    })
                }


            }
        }

    });
});
/*
router.put('/update/:_id', async (req,res) =>{
    console.log('Param id: ' + req.params._id);
    await Global.findById(req.params.id, function(err, data){

        if(err){
            console.log(err);
            res.status(500).send();
        } else {
            if(!data){
                res.status(400).send('No orders with the given _id found in the system.');
            } else {
                    data.client= req.body.client;
                    data.project = req.body.project;
                    data.description = req.body.description;
                    data.isBilled = req.body.isBilled;
                    data.status = req.body.status;

                    data.save(function(err,updatedData){
                        if(err){
                            console.log(err);
                            res.status(500).send();
                        } else {
                            res.send(data);
                        }
                    })
            }
        }

    });
});
*/

router.put('/:id',auth, async (req,res) =>{
    //validate the input
    console.log('The order number: ' + req.body.orderNumber);
    const {error} = validate(req.body);
    //check if there is any error
    if(error) return res.status(400).send(error.details[0].message);

   Order.findByIdAndUpdate(req.params.id,function(err,doc){
       if(err) return res.send(err);
            doc.orderNumber = req.body.orderNumber,
            doc.client = req.body.client,
            doc.project = req.body.project,
            doc.description = req.body.description,
            doc.isBilled = req.body.isBilled,
            doc.status = req.body.status,
            doc.save(callback);
   res.send(doc);
});
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
/*
router.get('/', async (req, res,) => {
    // throw new Error({error:'Error'});
     const orders = await Order.find().sort('date').populate('time');
     res.send(orders);
 });
*/
 router.get('/', async (req,res) =>{
    const orders = await Order.find().populate({path:'time', model:'Time', select:['date','description','time'],
                                                            populate:{path:'user',model:"User",select:['name','last']}});

    if(!orders) return res.status(400).send('The order with the given id is not valid');

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
    console.log("The order number is: " + req.params.order_number);
    await Order.findOne({orderNumber: req.params.order_number }, function(err,order){
        //check if there is any error
        if(!order) return res.status(400).send('The order with the given order number is not valid');
        res.send(order._id);
    });
});


module.exports = router;