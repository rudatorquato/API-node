'use strict';

const mongoose = require('mongoose');
const Order = mongoose.model('Order'); 

exports.get = async(data) => {
    var res = await Order
        .find({}, 'number status customer items')
        .populate('customer', 'name')
        .populate('items.product', 'title');
    return res;
}


exports.create = async(data) => {
    var order = new Order(data);
    //var product = new Product(req.body);
    //product.title = req.body.title;

    await order.save();
}

