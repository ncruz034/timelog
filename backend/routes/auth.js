const Joi = require('joi');
const bcrypt = require('bcrypt');
const _= require('lodash');
const express = require('express');

const router = express.Router();
const {User} = require('../models/user');
const mongoose = require('mongoose');

//Login a user
router.post('/', async (req,res) =>{
    //This is the first level of validation provided by Joi; it checks for valid input.
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    //This is the second level of validation; checks if the email id correct.
    let user = await User.findOne({email: req.body.email});
    if (!user) return res.status(400).send('Invalid email or password');
    //This is the third level of validdation checks if the password is correct.
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send('Invalid email or password');
    //If all the checks are negative, a token is generated and return to the calling app.
    const token = user.generateAuthToken();
    res.json(token);
});

//Validate the input provided by the calling application.
function validate(req){
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required(),   
    };
    return Joi.validate(req, schema);
}

module.exports = router;