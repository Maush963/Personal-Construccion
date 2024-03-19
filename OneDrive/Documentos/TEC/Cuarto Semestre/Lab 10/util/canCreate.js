module.exports = (request, response, next) => {
    let canCreate =  false;
    for (let permission of request.session.permissions) {
        if (permission.permission === 'create_champ') {
            canCreate = true;
        }
    }
    if (canCreate) {
        next();
    } else {
        return response.redirect('/users/logout');    
    }
}
