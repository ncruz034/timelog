const mongoose = require('mongoose');
//import mongoose from 'mongoose';
const Joi = require('Joi');

const Time = mongoose.model('Time',new mongoose.Schema({
    date:{type: Date, default: Date.now},
    order:{type:Number, required:true},
    name: {type:String, required:true},
    last: {type:String, required:true},
    description:{type:String, required:true}, 
    time:{type:Number, required:true}
    }));

 


function validateTime(time){
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(time, schema);
    //check if there is any error
}

exports.Time = Time;
exports.validate = validateTime;