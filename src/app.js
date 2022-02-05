'use strict'

const packageConfig = require('../package.json');

global.VERSAO_API = packageConfig.version;
global.DESCRICAO_API = packageConfig.description;

const express = require('express');
const bodyParser = require('body-parser');
const coreRoute = require('./routes/core-route');
const requestLog = require('debug')('api-server:requestLog');
const responseLog = require('debug')('api-server:responseLog');

const app = express();
app.use(bodyParser.json());

// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

    requestLog(req.originalUrl);

    var oldSend = res.send;
    res.send = function (data) {
        responseLog(data);
        oldSend.apply(res, arguments);
    }

    next();
});

coreRoute.carregarRotas(app);

module.exports = app;