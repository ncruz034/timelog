const express = require('express');
const auth = require('../routes/auth');
const times = require('../routes/times');
const users = require('../routes/users');
const orders = require('../routes/orders');
const clients = require('../routes/clients');
const error = require('../middleware/error');
module.exports = function(app){
    app.use(express.json());
    app.use('/api/times', times);
    app.use('/api/orders',orders);
    app.use('/api/orders/projects',orders);
    app.use('/api/users',users);
    app.use('/api/auth',auth);
    app.use('/api/clients',clients);
    app.use(error);
}