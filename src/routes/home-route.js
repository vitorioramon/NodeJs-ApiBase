'use strict';

const express = require('express');
const controller = require('../controllers/home-controller');

const { usuarioLogado, administrador } = require('../services/authorization-service');

const router = express.Router();
router.get('/', controller.home);
router.get('/logado', usuarioLogado, controller.home);
router.get('/admin', administrador, controller.home);

module.exports = router;