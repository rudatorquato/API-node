'use strict';

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer'); 

exports.create = async(data) => {
    var customer = new Customer(data);
    //var product = new Product(req.body);
    //product.title = req.body.title;

    await customer.save();
}