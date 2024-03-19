module.exports = (request, response, next) => {
    let canView =  false;
    for (let permission of request.session.permissions) {
        if (permission.permission === 'view_champ') {
            canView = true;
        }
    }
    if (canView) {
        next();
    } else {
        return response.redirect('/users/logout');    
    }
}
