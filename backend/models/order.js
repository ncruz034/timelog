const mongoose = require('mongoose');
const Joi = require('Joi');


const Order = mongoose.model('Order',new mongoose.Schema({
date:{type: Date, default: Date.now, required:true},
clientName: { type: String, required:true},
address: { type: String },
phoneNumber: { type: String,  required:true },
fieldWorkPromissed: { type: String },
printsPromissed: { type: String },
projectName: { type: String,  required:true },
legalDescription: { type: String},
orderPlacedBy: {type: String, required: true },
orderReceivedBy: {type: String, required: true },
referToFileNumber: {type: String },
referToFieldBookNumber: {type: String },
referToOrderNumber: {type: String },
fieldBook: { type: String },
page: { type: String },
section: { type: String },
township: { type: String },
range: { type: String },
partyChief: { type: String },
dateCompleted: { type: String },
mail: { type: String },
deliver: { type: String },
pickup: { type: String },
mailPrintsTo: { type: String },
deliverPrintsTo: { type: String },
printsAtTime: { type: String },
dateInvoice: { type: String },
 amountSetBy: { type: String },
invoiceTypedBy: { type: String },
courierFees: { type: String },
applPermitFees: { type: String },
cod: { type: String },
noCod: { type: String },
orderNumber: { type: String,  required: true },
fileNumber: { type: String, required: true },
price: { type: Number},


    //orderNumber:String,
    //clientName: {type:String, required:true},
    //projectName: {type:String, required:true},
    //date:{type: Date, default: Date.now},
    //description:{type:String, required:true}, 
    //isBilled:{type:Boolean, required:true},
   // status: {type:String, required:true},
    time: [{type: mongoose.Schema.ObjectId, ref:'Time'}],

    /* legalDescription:{type:String,required:false},

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
    } */
    /*,
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
        address: Joi.string().required(),
        orderNumber: Joi.string().required(),
        clientName: Joi.string().required(),
        projectName: Joi.string().required(),
        date: Joi.string().required(),
        phoneNumber: Joi.string().required(),
        orderPlacedBy: Joi.string().required(),
        orderReceivedBy: Joi.string().required()
        //legalDescription: Joi.string().required(),
       /* isBilled: Joi.bool().required(),
        status: Joi.string().required()*/
    };

    return Joi.validate(order, schema);
    //check if there is any error
}

exports.Order = Order;
exports.validate = validateOrder;