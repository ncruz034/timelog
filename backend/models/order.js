const mongoose = require('mongoose');
const Joi = require('Joi');


const Order = mongoose.model('Order',new mongoose.Schema({
    orderNumber:String,
    date:{type: Date, default: Date.now},
    client: {type:String, required:true},
    project: {type:String, required:true},
    description:{type:String, required:true}, 
    isBilled:{type:Boolean, required:true},
    status: {type:String, required:true},
    time: [{type: mongoose.Schema.ObjectId, ref:'Time'}],
    order_stats:{
        budget:{type:Number},
        totalFieldTime:{type:Number},
        totalOfficeTime:{type:Number},
        totalOvertime:{type:Number}
    }/*,
    theTime:[
        {
            user:{type:String},
            date:{type:Date},
            description:{type:String},
            time:{type:Number},
            isOfficeTime:{type:Boolean},
            isOvertime:{type:Boolean},
        }
    ]*/
    }));


function validateOrder(order){
    const schema = {
        orderNumber: Joi.string().required(),
        date: Joi.string().required(),
        client: Joi.string().min(3).required(),
        project: Joi.string().required(),
        description: Joi.string().required(),
        isBilled: Joi.bool().required(),
        status: Joi.string().required()
    };

    return Joi.validate(order, schema);
    //check if there is any error
}

exports.Order = Order;
exports.validate = validateOrder;