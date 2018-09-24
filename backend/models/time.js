const mongoose = require('mongoose');
//import mongoose from 'mongoose';
const Joi = require('Joi');

const Time = mongoose.model('Time',new mongoose.Schema({
    date:{type: Date, default: Date.now},
    orderNumber:{type: mongoose.Schema.Types.ObjectId, ref: 'Order', required:true},
    client: {type:String, required:true},
    description:{type:String, required:true}, 
    time:{type:Number, required:true},
    user_Id:[{type: mongoose.Schema.Types.ObjectId, ref: 'User', required:true}]
    }));


function validateTime(time){
    const schema = {
        date: Joi.string().min(3).required(),
        orderNumber: Joi.required(),
        client: Joi.string().min(3).required(),
        description: Joi.string().min(3).required(),
        time: Joi.number().required(),
        user_Id: Joi.required()
    };
    return Joi.validate(time, schema);
    //check if there is any error
}

exports.Time = Time;
exports.validate = validateTime;