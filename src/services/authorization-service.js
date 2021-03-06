'use strict';

const jwt = require('jsonwebtoken');
const respostas = require('../shared/response-shared');

exports.usuarioLogado = function (req, res, next) {
    var token = req.headers['x-access-token'];

    if (!token) {
        respostas.naoAutorizado(res);
    } else {
        jwt.verify(token, process.env.CHAVE_SEGURANCA, function (error, decoded) {
            if (error) {
                respostas.tokenInvalido(res);
            } else {
                next();
            }
        });
    }
};

exports.administrador = function (req, res, next) {
    var token = req.headers['x-access-token'];

    if (!token) {
        respostas.naoAutorizado(res);
    } else {
        jwt.verify(token, process.env.CHAVE_SEGURANCA, function (error, decoded) {
            if (error) {
                respostas.tokenInvalido(res);
            } else {
                if (decoded.roles && decoded.roles.includes && decoded.roles.includes('admin')) {
                    next();
                } else {
                    respostas.naoAutorizado(res, 'Área restrita');
                }
            }
        });
    }
};