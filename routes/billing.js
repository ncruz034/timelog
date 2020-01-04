const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const bcrypt = require('bcrypt');
const _= require('lodash');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const {Project, validate} = require('../models/project');
const { Global } = require('../models/global');
const asyncMIddleware = require('../middleware/async');
const ObjectId = mongoose.Types.ObjectId;


// Get an Project by id
router.get('/', async (req,res) =>{
     const project = await Project.aggregate([
         //{ $match: {_id: ObjectId(req.params.id)}},
         { $match: {"projectName": "Westview Logistics"}},
         {$lookup: {from: 'orders', localField:'projectName',foreignField: 'projectName', as: 'projectOrders'}},
         {$lookup: {from: 'times', localField:'projectName',foreignField: 'projectName', as: 'times'}},
         { $group: {_id: {orderNumber: "$orderNumber"},}}
    
    ]);
 
      //check if there is any error
      if(!project) {
          return res.status(400).send('The projectt with the given id is not valid');
         }

     res.send(project[0]);
});

module.exports = router;