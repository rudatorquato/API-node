'use strict';

//const mongoose = require('mongoose');
//const Customer = mongoose.model('Customer');
const repostory = require('../repositories/order-repository');
const guid = require('guid');

exports.get = async(req, res, next) => {
    try {
        var data = await repostory.get();
        res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar a requisição'
        });
    }
}

exports.post = async(req, res, next) =>{
    try{
        await repostory.create({
            customer: req.body.customer,
            number: guid.raw().substring(0, 6),
            items: req.body.items
            })
        res.status(200).send({
            message: 'Pedido cadastrado com sucesso!'
        });
    }catch (e){
        res.status(500).send({
            message: 'Falha ao processar a requisição'
        });
    }
};