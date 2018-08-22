const mongoose = require('mongoose');
const Joi = require('Joi');
//const {User, validate} = require('./models/user');

const User = mongoose.model('User',new mongoose.Schema({
    id:{type:Number,required:true},
    name:{type:String, required:true,minlength:2,maxlength:50},
    last:{type:String, required:true,minlength:2,maxlength:50},
    salary: {type:Number, required:true},
    description:{type:String, required:true},
    email:{type:String, required:true,minlength:5,maxlength:255,unique:true},
    password:{type:String, required:true,minlength:5,maxlength:1024},
    time:[Time]
    }));

function validateUser(user){
    const schema = {
        name: Joi.string().min(2).max(50).required(),
        last: Joi.string().min(2).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required(),   
    };
    return Joi.validate(user, schema);
    //check if there is any error
}

exports.User = User;
exports.validate = validateUser;