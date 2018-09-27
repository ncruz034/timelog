const mongoose = require('mongoose');
//import mongoose from 'mongoose';
const Joi = require('Joi');

const Time = mongoose.model('Time',new mongoose.Schema({
    date:{type: Date, default: Date.now},
    order_id:{type: mongoose.Schema.Types.ObjectId, ref: 'Order', required:true},
    description:{type:String, required:true}, 
    time:{type:Number, required:true},
    user_id:{type: mongoose.Schema.Types.ObjectId, ref: 'User', required:true}
    }));


function validateTime(time){
    const schema = {
        date: Joi.string().min(3).required(),
        order_id: Joi.required(),
        description: Joi.string().min(3).required(),
        time: Joi.number().required(),
        user_id: Joi.required()
    };
    return Joi.validate(time, schema);
    //check if there is any error
}

exports.Time = Time;
exports.validate = validateTime;