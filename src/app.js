'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();


mongoose.connect(config.connectionString, //mongo atlas
{ useNewUrlParser: true, useUnifiedTopology: true});

//Carrega os models
const Product = require('./models/product');
const Custumer = require('./models/customer');
const Order = require('./models/order');


// Carrega rotas
const indexRoute = require ('./routes/index-route');
const productRoute = require('./routes/product-route');
const custumerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/custumers', custumerRoute);
app.use('/orders', orderRoute);

module.exports = app;