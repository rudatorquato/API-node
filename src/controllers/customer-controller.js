'use strict';

//const mongoose = require('mongoose');
//const Customer = mongoose.model('Customer');
const ValidationContract = require('../validators/fluent-validator');
const repostory = require('../repositories/customer-repository');

exports.post = async(req, res, next) =>{
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.name, 3, 'O nome deve conter pelo menos 3 caracteres');
    contract.isEmail(req.body.email, 3, 'E-mail invalido ');
    contract.hasMinLen(req.body.password, 6, 'A senha deve conter pelo menos 3 caracteres');

    // se os dados forem invalidos
    if (!contract.isValid()){
        res.status(400).send(contract.errors()).end();
        return;
    }

    try{
        await repostory.create(req.body)
        res.status(200).send({
            message: 'Cliente cadastrado com sucesso!'
        });
    }catch (e){
        res.status(500).send({
            message: 'Falha ao processar a requisição'
        });
    }
};