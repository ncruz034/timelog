const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const bcrypt = require('bcrypt');
const _= require('lodash');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const {Order, validate} = require('../models/order');
const { Global } = require('../models/global');
//const asyncMiddleware = require('../middleware/async');
const ObjectId = mongoose.Types.ObjectId;



// Get an order by id
// router.get('/:id', asyncMiddleware(async (req,res) =>{
router.get('/:id', auth, async (req,res) =>{
   // console.log("In routes: " + req.params.id);
    //const order = await Order.findById(req.params.id);
   
    const order = await Order.aggregate([
        { $match: {_id: ObjectId(req.params.id)}},
        {$lookup: {from: 'times',localField:'orderNumber',foreignField: 'orderNumber', as: 'time'}}]);

     //check if there is any error
     if(!order) {
         return res.status(400).send('The order with the given id is not valid');
        }
    res.send(order[0]);

   });

   
//================================================================

router.get('/', async (req,res) =>{

try {
const orders = await Order.aggregate([
        {
           $lookup: {
                from: 'times', 
                localField:'orderNumber', 
                foreignField:'orderNumber', 
                as: 'time'
            }
        }
    ]);
    res.send(orders);
}
catch (ex) {
    res.status(500).send('Error! Something failed on our end, try again later.');
} 
});

//================================================================


router.get('/latest/:last', async (req,res)=>{
    // console.log("getting latest service");
    const order = await Order.find().sort({_id:parseInt(req.params.last)}).limit(1);
    if(!order) return res.status(400).send('No latest order available');
    res.send(order);
});

/*
router.get('/', async (req,res) =>{
const orders = await Order.aggregate([
        //{ $match: { client: "BROAD AND CASSEL, P.A. AND STACY HALPEN"}},
        {
           $lookup: {
                from: 'times', 
                localField:'orderNumber', 
                foreignField:'orderNumber', 
                as: 'time'
            }
        }
       //{$lookup: {from: 'times',localField:'_id',foreignField: 'order', as: 'time'}}
    ]);

    res.send(orders).exec((err, result)=>{
        if (err) {
            console.log("error" ,err)
        }
        if (result) {
            //console.log(result);
            res.send(result);
        }
        
  });
});
  
*/

  //populate({path:'time', model:'Time', select:['date','description','time']});
                                                        // populate:{path:'user',model:"User",select:['name','last']}});
/*
if(!orders) return res.status(400).send('The order with the given id is not valid');

let counter=0;
    for(let order of orders) {
        for(let time of order.time){
            console.log(time.time);
        counter = counter + time.time;
        }   
    }    
    console.log('The time is: ' + counter);
res.send(orders);

});
*/



//Register a new Order; this route should be protected to only admin users.
router.post('/', auth, async (req,res) =>{
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let order = new Order(req.body);  
    order = await order.save(); 
    res.send(order);
});

/* router.put('/:id', auth, admin, async (req,res) =>{ */
    router.put('/:id', async (req,res) =>{
        const {error} = validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);
       
        const updatedOrder = req.body;
        const order = await Order.findByIdAndUpdate(req.params.id,updatedOrder);
        res.status(200).send(order);
    });
    
    // Delete a project by id
    router.delete('/delete/:_id', async (req,res) =>{
        const order = await Order.findByIdAndRemove(req.params._id);
        if(!order) return res.status(404).send('The order was not found'); 
        res.send(order);
    });


    module.exports = router;



//Finds an order by _id, and returns all the times present in the order
/* router.get('/time/:order_id', async (req,res) =>{
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
}); */

//Finds an order by _id and adds a new time to the order.
/* router.post('/:order_id/time', async (req,res) =>{  
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
}); */

//Get all orders
/*
router.get('/', async (req, res,) => {
    // throw new Error({error:'Error'});
     const orders = await Order.find().sort('date').populate('time');
     res.send(orders);
 });
*/
/*
 router.get('/', async (req,res) =>{
    const orders = await Order.find().populate({path:'time', model:'Time', select:['date','description','time'],
                                                           populate:{path:'user',model:"User",select:['name','last']}});

    if(!orders) return res.status(400).send('The order with the given id is not valid');

    res.send(orders);
});
*/

/* //Get an order by id
router.get('/:id', auth, async (req,res) =>{
    let id = mongoose.Types.ObjectId(req.params.id);
    console.log('the id:' + id);

    const order = await Order.aggregate([
        // { $match: { client: "BROAD AND CASSEL, P.A. AND STACY HALPEN"}},
         {"$match": {_id: id}} , {$lookup: {from: 'times',localField:'_id',foreignField: 'order', as: 'time'}}
     ]);
console.log(order);

  //check if there is any error
  if(!order) return res.status(400).send('The order with the given id is not valid');
 res.send(order);
}); */
//Get an order by orderNumber and returns the _id.
/* router.get('/number/:order_number', auth, async (req,res) =>{
    console.log("The order number is: " + req.params.order_number);
    await Order.findOne({orderNumber: req.params.order_number }, function(err,order){
        //check if there is any error
        if(!order) return res.status(400).send('The order with the given order number is not valid');
        res.send(order._id);
    });
}); */

//Get an order by orderNumber and returns the _id.
/* router.delete('/:_id/time/:time_id', auth, async (req,res) =>{
    console.log(req.params._id);
    const order = await Order.findById(req.params._id);
        //check if there is any error
        if(!order) return res.status(400).send('The order with the given order number is not valid');
    
        order.time.pop(req.body.time_id);
        order.save(function (error){
            if(error){
                console.log(error);
            }else{
                res.send(order.time);
            }
        });
}
); */
