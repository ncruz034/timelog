//import express from 'express';
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//import mongoose from 'mongoose';
//import cors from 'cors';
require("babel-polyfill");

//const times = require('./routes/times');
//const home = require('./routes/home');
//const express = require('express');
//const mongoose = require('mongoose');
const app = express();
app.use(cors());
//const router = express.Router()

mongoose.connect('mongodb://localhost:27017/shiskindb')
    .then(()=> console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB',err))

    const timeSchema = mongoose.Schema({
        date:{type: Date, default: Date.now},
        order:{type:Number, required:true},
        client: {type:String, required:true},
        description:{type:String, required:true}, 
        time:{type:Number, required:true}
        });

    const Time = mongoose.model('Time',timeSchema);

async function createTime(){
    const time = new Time({
        userId:'',
        date:'08-13-2018',
        order: 208777,
        client: 'Miami Merchant',
        description: 'Asbuilt',
        time:4.5
    });

    try{
        const result = await time.save();
        console.log(result);
    }catch(ex){
        console.log(ex.message);
    }
    
}

createTime();
/*
//Get all currencies
async function getCurrencies(){
    const currencies = await Currency
    .find({symbol:'XLM'})
    .sort({date: 1})
    .select({pair:1,price:1,date:1});
    console.log(currencies);
}
//We use this method by finding first the record then updating it
async function findThenUpdateCurrency(id){
    const currency = await Currency.findById(id);
    if(!currency) return;
    currency.side = 'SALE';
    const result = await currency.save();
    console.log(result);
}
//Update the record and returns the old document.
async function updateCurrencyByIdReturnOld(id){
    const currency = await Currency.findByIdAndUpdate(id,{
        $set: {
            side:'BUY'
        }
    });
    console.log(currency);
}
//Update the record and returns the New document.
async function updateCurrencyByIdReturnNew(id){
    const currency = await Currency.findByIdAndUpdate(id,{
        $set: {
            side:'SALE'
        },
    },{
        new:true});
    console.log(currency);
}
//To update the document without returning it
async function updateCurrency(id){
    const result = await Currency.update({_id:id},{
        $set: {
            side:'BUY'
        }
    });
    console.log(result);
}
//To update the document without returning it
async function deleteCurrency(id){
    const result = await Currency.deleteOne({_id:id});
    console.log(result);
}



//updateCurrencyByIdReturnNew('5b6ba9a59b07cf9f5462b53f');
//updateCurrencyByIdReturnOld('5b6ba9a59b07cf9f5462b53f');
//updateCurrency('5b6ba9a59b07cf9f5462b53f');
//findThenUpdateCurrency('5b6ba2389eb7210bd171e123');
//getCurrencies();
*/
app.use(express.json());
//app.use('/api/times', times);
const port = process.env.PORT || 3000;

app.listen(port ,()=>{console.log(`Listening on port ${port}...`);})
