'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const app = express();
const router = express.Router();


mongoose.connect('mongodb+srv://teste:123@cluster0-a4qwc.azure.mongodb.net/api?retryWrites=true&w=majority', 
{ useNewUrlParser: true, useUnifiedTopology: true});

//Carrega os models
const Product = require('./models/product');


// Carrega rotas
const indexRoute = require ('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;