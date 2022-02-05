exports.carregarRotas = (app) => {
    const homeRoute = require('../routes/home-route');

    app.use('/', homeRoute);
};