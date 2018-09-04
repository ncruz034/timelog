

const mongoose = require('mongoose');
const winston = require('winston');

module.exports = function(){
    //mongoose.connect('mongodb://localhost:27017/shiskindb',{useNewUrlParser:true})
    mongoose.connect('mongodb://ncruz:Piloto27@ds141932.mlab.com:41932/shiskindb',{useNewUrlParser:true})
    .then(()=> winston.info('Connected to MongoDB...'))

}