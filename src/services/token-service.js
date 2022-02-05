'use strict';

const jwt = require('jsonwebtoken');
const respostas = require('../shared/response-shared');

exports.criarToken = async (data) => {
    return jwt.sign(
        data, 
        process.env.CHAVE_SEGURANCA, 
        { 
            subject: '', // Entidade à quem o token pertence, normalmente o ID do usuário;
            issuer: '', // Emissor do token;
            expiresIn: '10m', // Timestamp de quando o token irá expirar;
            audience: '', // Destinatário do token, representa a aplicação que irá usá-lo.
        }
    );
}

exports.lerToken = async (token) => {
    return await jwt.verify(
        token, 
        process.env.CHAVE_SEGURANCA
    );
}