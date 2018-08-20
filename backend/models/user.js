const mongoose = require('mongoose');
const Joi = require('Joi');
const {User, validate} = require('./time');

const User = mongoose.model('User',new mongoose.Schema({
    id:{type:Number,required:true},
    name:{type:String, required:true},
    last:{type:String, required:true},
    salary: {type:Number, required:true},
    description:{type:String, required:true},
    time:[Time]
    }));

function validateUser(user){
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(user, schema);
    //check if there is any error
}

exports.Time = User;
exports.validate = validateUser;