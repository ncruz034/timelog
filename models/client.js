const mongoose = require('mongoose');
const Joi = require('Joi');


const Client = mongoose.model('Client',new mongoose.Schema({
    date:{type: Date, required: true},
    clientName: {type:String, required:true},
    address: {type:String, required:true},
    phone:{type:String, required:true}, 
    contact:{type:String, require:true},
    projects:[{type: mongoose.Schema.ObjectId, ref:'Order'}]
    }));

function validateClient(client){
    const schema = {
        date: Joi.date().required(),
        clientName: Joi.string().min(3).required(),
        address: Joi.string().required(),
        phone: Joi.string().required(),
        contact: Joi.string().required(),
    };

    return Joi.validate(client, schema);
}

exports.Client = Client;
exports.validate = validateClient;