const mongoose = require('mongoose');
const Joi = require('Joi');


const Client = mongoose.model('Client',new mongoose.Schema({
    date:{type: Date, default: Date.now},
    clientName: {type:String, required:true},
    address: {type:String, required:true},
    phone:{type:String, required:true}, 
    contact:{type:String, require:true},
    }));

function validateClient(client){
    const schema = {
        date: Joi.string().required(),
        clientName: Joi.string().min(3).required(),
        address: Joi.string().required(),
        phone: Joi.string().required(),
        contact: Joi.string().required(),
    };

    return Joi.validate(client, schema);
}

exports.Client = Client;
exports.validate = validateClient;