const auth = require('../middleware/auth');
const bcrypt = require('bcrypt');
const _= require('lodash');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const {Client, validate} = require('../models/client');

const asyncMIddleware = require('../middleware/async');

//Register a new Client; this route should be protected to only admin users.
router.post('/', auth, async (req,res) =>{
   
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
   
    let client = new Client({
                           date:req.body.date,
                           clientName:req.body.clientName,
                           address:req.body.address,
                           phone:req.body.phone,
                           contact:req.body.contact,
                           projects:req.body.projects
                        });
    
    client = await client.save();
    res.send(client);
});

router.get('/', async (req,res) =>{
    const clients = await Client.find();

    if(!clients) return res.status(400).send('The order with the given id is not valid');

    res.send(clients);
});
//Get an order by id
router.get('/:id', auth, async (req,res) =>{
    const client = await Client.findById(req.params.id);
     //check if there is any error
     if(!client) return res.status(400).send('The client with the given id is not valid');
    res.send(client);
   });


router.put('/:id', async (req,res) =>{
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    const updatedClient = req.body;
    const client = await Client.findByIdAndUpdate(req.params.id,updatedClient);
    res.status(200).send(client);
});

module.exports = router;