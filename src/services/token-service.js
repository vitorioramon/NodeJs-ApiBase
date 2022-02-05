'use strict';

const jwt = require('jsonwebtoken');
const respostas = require('../shared/response-shared');

exports.criarToken = async (data) => {
    return jwt.sign(data, process.env.CHAVE_SEGURANCA, { expiresIn: '1d' });
}

exports.lerToken = async (token) => {
    return await jwt.verify(token, process.env.CHAVE_SEGURANCA);;
}