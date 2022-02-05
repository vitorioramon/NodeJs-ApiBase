'use strict'

global.VERSAO_API = '0.0.2';

const express = require('express');
const bodyParser = require('body-parser');
const coreRoute = require('./routes/core-route');

const app = express();
app.use(bodyParser.json());

// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    next();
});

coreRoute.carregarRotas(app);

module.exports = app;