const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {Time, validate} = require('../models/time');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
//const asyncMIddleware = require('../middleware/async');

//Get all times
router.get('/',auth,  async (req, res,) => {
       // throw new Error({error:'Error'});
        const times = await Time.find().sort('date').populate('order',['orderNumber'],'Order');
        console.log("the time is here: " + time);
        res.send(times);
});

//Get a time by id
router.get('/:id', auth, async (req,res) =>{
    const time = await Time.findById(req.params.id);
     //check if there is any error
     if(!time) return res.status(400).send('The time with the given symbol is not valid');
    console.log("the time is here: " + time);
     res.send(time);
});



// Get all times for a user
router.get('/user/:user_id',auth,  async (req, res,) => {
    const data = {
         times:[],
        orders:[]
    }

    // throw new Error({error:'Error'});
    const times =  await Time.aggregate([
        {"$match":{"user_id": req.params.user_id}},
        {"$group":{_id:{date:"$date"},count:{$sum: 1},
            times: {
                $push:{_id:"$_id", time:"$time", overTime:"$overTime", description:"$description",orderNumber:"$orderNumber", isField:"$isField"}
            }
    }}
    ]);

    const byOrders =  await Time.aggregate([
        {"$match":{"user_id": req.params.user_id}},
        {"$group":
            {_id:{order:"$orderNumber"},count:{$sum: 1},
                dates: {
                    $push:{_id:"$_id", time:"$time",date:"$date"}
                }
            }
        },
      /*   {"$group": {_id:{date:"$date"}}} */

    ]);
    
     if(!times) return res.status(400).send('The user with the given user _id is not valid');
     data.times = times;
     data.orders = byOrders;
     res.send(data);
});

// Get all times for a week for a user from a starting date
router.get('/user/:user_id/:date',auth,  async (req, res,) => {
    // throw new Error({error:'Error'});
    const times =  await Time.aggregate([
        {"$match":{"user_id": req.params.user_id}},
        {"$group":{_id:{date:"$date"},count:{$sum: 1},
            times: {
                $push:{_id:"$_id", time:"$time", description:"$description",orderNumber:"$orderNumber"}
            }
    }}
    ])
     if(!times) return res.status(400).send('The user with the given user _id is not valid');
     res.send(times);
});

// Update time 
router.put('/update/:id',auth, async (req,res) =>{
    //validate the input
    const {error} = validate(req.body);
    //check if there is any error
    if(error) return res.status(400).send(error.details[0].message);
    const updatedTime = req.body;
    const time = await Time.findByIdAndUpdate(req.params.id, updatedTime);
    res.status(200).send(time);
});

// Add a new time
router.post('/', async (req,res) =>{
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    let time = new Time({
        _id: mongoose.Types.ObjectId(),
        date: req.body.date,
        order_id: req.body.order_id,       //The _id of the work order on which work was prformed
        orderNumber: req.body.orderNumber,
        projectName: req.body.projectName,
        clientName: req.body.clientName,
        description: req.body.description, //What type of work was done on this job
        time:req.body.time,                //How much time was invested in this job
        overTime:req.body.overTime,
        isField: req.body.isField,
        userName: req.body.userName,
        user_id: req.body.user_id          //The _id of the user that work on the job
    });
    /*
    const order = await order.find({orderNumber: req.body.orderId},function(err,order){
        if(err) return console.log("Error saving time to order...");
        order.time.push(req.body.user_id);
    });
    */
    time = await time.save();
    res.send(time._id);
});

// Delete a time
router.delete('/delete/:id', async (req,res) =>{
    console.log("Deletting Order id" + req.params.id);
    const time = await Time.findByIdAndRemove(req.params.id);
    if(!time) return res.status(404).send('The time was not found');
    res.send(req.params.di);
});

module.exports = router;




 /* router.get('/user/:user_id',auth,  async (req, res,) => {
    // throw new Error({error:'Error'});
     const times = await Time.find({user : req.params.user_id}).sort('date').populate('order',['orderNumber'],'Order');
     if(!times) return res.status(400).send('The user with the given user _id is not valid');
     res.send(times);
}); */ 

/* router.get('/user/:userName',auth,  async (req, res,) => {
    console.log("Sending the times for: ....." + req.params.userName);
    const times =  await Time.aggregate([
        {"$match":{"userName" : req.params.userName}}
         {"$match":{"user_id": req.params.user_id}},
        {"$group":{_id:{date:"$date"},count:{$sum: 1},
            entry: {
                $push:{_id:"$_id", time:"$time", description:"$description",orderNumber:"$orderNumber"}
            }
    }} 
    ])
    console.log(times);
     //const times = await Time.find({user : req.params.user_id}).sort('date').populate('order',['orderNumber'],'Order');
     if(!times) return res.status(400).send('The user with the given user _id is not valid');
     res.send(times);
}); */

//Get all times for a user
/* router.get('/user/:user_id/week/:week_No',auth,  async (req, res,) => {
    // throw new Error({error:'Error'});
     const times = await Time.find({user : req.params.user_id}).sort('date').populate('order',['orderNumber'],'Order');
     if(!times) return res.status(400).send('The user with the given user _id is not valid');

     res.send(times);
}); */

//Get an order by orderNumber and returns the _id.
/* router.get('/order/:order_id', async (req,res) =>{
    await Time.find({order_id: req.params.order_id }, function(err,times){
        //check if there is any error
        if(!times) return res.status(400).send('The order with the given order number is not valid');
        res.send(times);
    });
}); */

/* 
db.users.aggregate([
    {$unwind:"$time"}, 
    {
        $lookup: {from:"times",
        localField:"time",
        foreignField:"_id",
        as:"time"
        } 
    }, 
    {$project:{name: 1, order:1, description:1, date:1, time:1}} 
    ]).pretty()

    db.times.aggregate([
        {$match: {user:"5b90741f721b5bf5f8a699a4"}}, 
        {
            $lookup: {from:"orders",
            localField:"order",
            foreignField:"_id",
            as:"order"
            },
        }, 
        {$unwind: "$order"},
        {$project:{description:1, date:1, time:1, order:{orderNumber:1}}} ,
        ]).pretty() */