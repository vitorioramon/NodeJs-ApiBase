'use restrict'

const respostas = require('../shared/response-shared');

exports.home = (req, res, next) => {
    let data = {
        text: "Value of Text"
    };
    respostas.ok(res, 'API Home running...', data);
};
