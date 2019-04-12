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
    legalDescription:{type:String,required:false},

    orderPlacedBy:{type:String, required:true},
    orderReceivedBy:{type:String, required:true},
    referToFile:[{type:String, required:false}],
    referToFieldBook:[{type:String, required:false}],
    referToOrder:[{type: mongoose.Schema.ObjectId, ref:'Order'}],
    fieldWork:{
            fieldBook:{type:String, required: false},
            page:[{type:Number, required:false}],
            partyChief:[{type: mongoose.Schema.ObjectId, ref:'User'}],
            dateCompleted:{type: Date, required:false}
        },
    instructions:{
        numberOfPrintsToMail:{type:Number, required:false},
        mailPrintsTo:{type:String, required:false},
        numberOfPrintsToDeliver:{type:Number, requirded: false},
        deliverPrintsTo:{type:String, required:false},
        numberOfPrintsToPickup:{type:Number, required:false},
        pickupPrintsAtTime:{type:String, required:false}
    },
    invoice:{
        date:{type:Date, required:false},
        amountSetBy:{type:String, required:false},
        invoicedTypedBy:{type:String, required:false},
        price:{type:Number, required:false}
    },
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