'use restrict'

exports.naoAutorizado = function (response, mensagem) {
    response.status(401).json({
        version: global.VERSAO_API,
        error: mensagem || 'Acesso restrito'
    });
};

exports.tokenInvalido = function (response, mensagem) {
    response.status(401).json({
        version: global.VERSAO_API,
        error: mensagem || 'Token inválido.'
    });
};

exports.ok = function (response, mensagem, objeto) {
    response.status(200).json({
        version: global.VERSAO_API,
        success: mensagem || 'OK',
        result: objeto
    })
}