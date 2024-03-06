exports.get_prueba = (request, response, next) => {
    const valor = 'VALOR DE EJEMPLOOOOOOO v2';
    response.render('prueba', {variable: valor});
};