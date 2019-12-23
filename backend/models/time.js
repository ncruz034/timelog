const mongoose = require('mongoose');
//import mongoose from 'mongoose';
const Joi = require('Joi');

const Time = mongoose.model('Time',new mongoose.Schema({
    date:{type: Date, default: Date.now},
    orderNumber:{type: String, required:true},
    order_id:{type: mongoose.Schema.Types.ObjectId, ref: 'Order', required:true},
    projectName:{type: String, required: true},
    clientName: {type: String, required: true},
    description:{type:String, required:true}, 
    time:{type:Number, required:true},
    overTime:{type:Number},
    isField: {type: Boolean},
    userName:{type:String, required:true},
    user_id:{type: String, required: true},
    //user_id:{type: mongoose.Schema.Types.ObjectId, ref: 'User', required:true},
}));


function validateTime(time){
    const schema = {
        date: Joi.string().min(3).required(),
        orderNumber: Joi.required(),
        order_id: Joi.required(),
        projectName: Joi.required(),
        clientName: Joi.required(),
        description: Joi.string().min(3).required(),
        time: Joi.number().required(),
        overTime: Joi.number().required(),
        isField: Joi.boolean().allow(''),
        userName: Joi.string().required(),
        user_id: Joi.required(),
    };
    return Joi.validate(time, schema);
    //check if there is any error
}

exports.Time = Time;
exports.validate = validateTime;