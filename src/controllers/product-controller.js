'use strict';

//const mongoose = require('mongoose');
//const Product = mongoose.model('Product');
const ValidationContract = require('../validators/fluent-validator');
const repostory = require('../repositories/product-repository');

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

exports.getBySlug = async(req, res, next) => {
    try {
        var data = await repostory.getBySlug(req.params.slug);
        res.status(200).send(data);
    }catch (e){
        res.status(500).send({
            message: 'Falha ao processar a requisição'
        });
    }
}

exports.getById = async(req, res, next) => {
    try {
        var data = await repostory
        .getById(req.params.id);
        res.status(200).send(data);
    }catch (e){
        res.status(500).send({
            message: 'Falha ao processar a requisição'
        });
    }
}

exports.getByTag = async(req, res, next) => {
    try {
        var data = await repostory
        .getByTag(req.params.tag); 
        res.status(200).send(data);
    } catch (e){
        res.status(500).send({
            message: 'Falha ao processar a requisição'
        });
    }
}

exports.post = async(req, res, next) =>{
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.title, 3, 'O titulo deve conter pelo menos 3 caracteres');
    contract.hasMinLen(req.body.slug, 3, 'O titulo deve conter pelo menos 3 caracteres');
    contract.hasMinLen(req.body.description, 3, 'O titulo deve conter pelo menos 3 caracteres');

    // se os dados forem invalidos
    if (!contract.isValid()){
        res.status(400).send(contract.errors()).end();
        return;
    }

    try{
        await repostory.create(req.body)
        res.status(200).send({
            message: 'Produto cadastrado com sucesso!'
        });
    }catch (e){
        res.status(500).send({
            message: 'Falha ao processar a requisição'
        });
    }
};

exports.put = async(req, res, next) =>{
    try{
        await repostory.update(req.params.id, req.body)
            res.status(200).send({
                message: 'Produto atualizado com sucesso!',
            });
        }catch (e){
            res.status(500).send({
                message: 'Falha ao processar a requisição'
            });
        }
};
exports.delete = async(req, res, next) =>{
    try{
        await repostory.delete(req.body.id)
            res.status(200).send({
                message: 'Produto removido com sucesso!',
            });
    }catch (e){
        res.status(500).send({
                message: 'Falha ao processar a requisição'
            });
        }
};
