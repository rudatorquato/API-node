'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const app = express();
const router = express.Router();


mongoose.connect('mongodb+srv://ruda:ruda@cluster0-wcbnr.azure.mongodb.net/apiretryWrites=true&w=majority', //mongo atlas
{ useNewUrlParser: true, useUnifiedTopology: true});

//Carrega os models
const Product = require('./models/product');
const Custumer = require('./models/custumer');
const Order = require('./models/order');


// Carrega rotas
const indexRoute = require ('./routes/index-route');
const productRoute = require('./routes/product-route');
const custumerRoute = require('./routes/custumer-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/custumers', custumerRoute);

module.exports = app;