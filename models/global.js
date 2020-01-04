const mongoose = require('mongoose');
const Joi = require('Joi');


const Global = mongoose.model('Global',new mongoose.Schema({
    currentOrderNumber:String,
    currentOrderId: [{type: mongoose.Schema.ObjectId, ref:'Order'}],
    }));

    
function validateGlobal(global){
    const schema = {
        currentOrderNumber: Joi.string().required(),
        currentOrderId: Joi.required(),
    };

    return Joi.validate(global, schema);
    //check if there is any error
}

exports.Global = Global;
exports.validate = validateGlobal;