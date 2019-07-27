const mongoose = require('mongoose');
const Joi = require('Joi');


const Order = mongoose.model('Order',new mongoose.Schema({
date:{type: Date, default: Date.now, required:true},
clientName: { type: String, required:true},
address: { type: String, required: true },
phoneNumber: { type: String,  required:true },
fieldWorkPromissed: { type: String},
printsPromissed: { type: String },
projectName: { type: String, required: true},
legalDescription: { type: String, required: true },
orderPlacedBy: {type: String, required: true },
orderReceivedBy: {type: String, required: true },
referToFileNumber: {type: String},
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
COD: { type: String },
noCOD: { type: String },
orderNumber: { type: String,  required: true },
fileNumber: { type: String, required: true },
price: { type: Number},

//time: [{type: mongoose.Schema.ObjectId, ref:'Time'}],
}));


function validateOrder(order){
<<<<<<< HEAD
    console.log('Validating order');
        const notRequired = Joi.string().allow('');

    const schema = Joi.object().keys({
        date: Joi.date(),
        clientName: Joi.string(),
        address: Joi.string(),
        phoneNumber: Joi.string(),
        fieldWorkPromissed: Joi.allow(''),
        printsPromissed: Joi.allow(''),
        projectName: Joi.string(),
        legalDescription: Joi.string(),
        orderPlacedBy: Joi.string(),
        orderReceivedBy: Joi.string(),
        referToFileNumber: Joi.allow(''),
        referToFieldBookNumber: Joi.allow(''),
        referToOrderNumber: Joi.allow(''),
        fieldBook: Joi.allow(''),
        page: Joi.allow(''),
        section: Joi.allow(''),
        township: Joi.allow(''),
        range: Joi.allow(''),
        partyChief: Joi.allow(''),
        dateCompleted: Joi.allow(''),
        mail: Joi.allow(''),
        deliver: Joi.allow(''),
        pickup: Joi.allow(''),
        mailPrintsTo: Joi.allow(''),
        deliverPrintsTo: Joi.allow(''),
        printsAtTime: Joi.allow(''),
        dateInvoice: Joi.allow(''),
        amountSetBy: Joi.allow(''),
        invoiceTypedBy: Joi.allow(''),
        courierFees: Joi.allow(''),
        applPermitFees: Joi.allow(''),
        COD: Joi.allow(''),
        noCOD: Joi.allow(''),
        orderNumber: Joi.string(),
        fileNumber: Joi.string(),
        price: Joi.number(),
    });
=======
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
>>>>>>> 94a2b0704fc11d88e18280224253631869d01051

    return Joi.validate(order, schema);
    //check if there is any error
}

exports.Order = Order;
exports.validate = validateOrder;