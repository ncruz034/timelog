

const mongoose = require('mongoose');
const winston = require('winston');

module.exports = function(){
    //mongoose.connect('mongodb://localhost:27017/shiskindb',{useNewUrlParser:true})
    //Mongodb Atlas connection:
    //mongodb+srv://<username:password>@cluster0.vwmn6.mongodb.net/shiskindb?retryWrites=true&w=majority



    mongoose.connect('mongodb+srv://<username:password>@cluster0.vwmn6.mongodb.net/shiskindb?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex: true})
    .then(()=> winston.info('Connected to MongoDB ATLAS...'))



    //.connect('mongodb://<username:password>@ds141932.mlab.com:41932/shiskindb',{useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex: true})
    //.then(()=> winston.info('Connected to MongoDB...'))
}
