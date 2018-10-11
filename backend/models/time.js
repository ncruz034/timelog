const mongoose = require('mongoose');
//import mongoose from 'mongoose';
const Joi = require('Joi');

const Time = mongoose.model('Time',new mongoose.Schema({
    date:{type: Date, default: Date.now},
    order:{type: mongoose.Schema.Types.ObjectId, ref: 'Order', required:true},
    description:{type:String, required:true}, 
    time:{type:Number, required:true},
    user:{type:String,required:true}, //[{type: mongoose.Schema.Types.ObjectId, ref: 'User', required:true}],
   // isField:{type:Boolean, required:true}
    }));


function validateTime(time){
    const schema = {
        date: Joi.string().min(3).required(),
        order: Joi.required(),
        description: Joi.string().min(3).required(),
        time: Joi.number().required(),
        user: Joi.required(),
        //isField: Joi.bool(),
    };
    return Joi.validate(time, schema);
    //check if there is any error
}

exports.Time = Time;
exports.validate = validateTime;