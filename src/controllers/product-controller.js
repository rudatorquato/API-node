'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req, res, next) => {
    Product
        .find({active: true}, 'title preice slug')        
        .then( data => {
            res.status(200).send({data});
        }).catch(e => {
            res.status(400).send({e});
        });
}


exports.post = ('/', (req, res, next) =>{
    var product = new Product(req.body);
    //var product = new Product(req.body);
    //product.title = req.body.title;

    product
        .save()
        .then( x => {
            res.status(200).send({
                message: 'Produto cadastrado com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao cadastrar o produto!',
                data: e
            });
        });
});

exports.put = ('/', (req, any, next) =>{
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item:req.body
    });
});

exports.delete = ('/', (req, res, next) =>{
    res.status(200).send(req.body);
});