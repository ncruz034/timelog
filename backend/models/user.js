const jwt = require('jsonwebtoken');
const config = require('config');
const mongoose = require('mongoose');
const Joi = require('Joi');

//const {User, validate} = require('./models/user');

const userSchema = new mongoose.Schema({
      _id:{type: mongoose.Schema.ObjectId},
      name:{type:String, required:true,minlength:2,maxlength:50},
      last:{type:String, required:true,minlength:2,maxlength:50},
      salary: {type:Number, required:true},
      position:{type:String, required:true},
      email:{type:String, required:true,minlength:5,maxlength:255,unique:true},
      password:{type:String, required:true,minlength:5,maxlength:1024},
      isAdmin:{type:Boolean},
      time:[{type: mongoose.Schema.ObjectId, ref:'Time'}],
      timeDetails:[{type: mongoose.Schema.ObjectId, ref:'Time'}],
      });

    userSchema.methods.generateAuthToken = function(){
        const token = jwt.sign({_id: this._id, isAdmin:this.isAdmin}, config.get('jwtPrivateKey'));
        return token;
    }

    const User = mongoose.model('User',userSchema);

function validateUser(user){
    const schema = {
        name: Joi.string().min(2).max(50).required(),
        last: Joi.string().min(2).max(50).required(),
        salary: Joi.number().required(),
        position: Joi.string().required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required(),   
       isAdmin: Joi.bool().required(),
    };
    return Joi.validate(user, schema);
    //check if there is any error
}

exports.User = User;
exports.validate = validateUser;