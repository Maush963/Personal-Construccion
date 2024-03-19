const User = require('../models/user.model');
const bcrypt = require('bcryptjs');


exports.get_login = (request, response, next) => {
    console.log("get_login");
    const error = request.session.error || "";
    request.session.error = "";
    response.render('login', {
        username: request.session.username || "",
        register: false,
        error: error,
        permissions: request.session.permissions || [],
    });
}


exports.post_login = (request, response, next) => {
    console.log("post_login");
    User.fetchOne(request.body.username)
    .then(([users, fieldData]) => {
        if (users.length == 1) {
            const user = users[0];
            bcrypt.compare(request.body.password, user.password)
            .then((doMatch) => {
                if (doMatch) {  
                    User.getPermissions(user.username)
                    .then(([permissions, fieldData]) => {
                        console.log(permissions);
                        request.session.permissions = permissions;
                        request.session.username = user.name;
                        request.session.isLoggedIn = true;
                        response.redirect('/champions');
                    })
                    .catch(err=> {console.log(err); });
                }else { 
                    request.session.error = "Usuario o contraseña incorrectos";
                    response.redirect('/users/login');
                }
            })

        }
        else {
            request.session.error = "Usuario o contraseña incorrectos";
            response.redirect('/users/login');
        }
    })
    .catch(err => {console.log(err); });
};

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

exports.get_signup = (request, response, next) => {
    console.log("get_signup");
    const error = request.session.error || '';
    request.session.error = '';
    response.render ('login', {
        username: request.session.username || "",
        register: true,
        error: error,
        permissions: request.session.permissions || [],
    });
};

exports.post_signup = (request, response, next) => {
    console.log("post_signup");
    const new_user = new User(request.body.username, request.body.name, request.body.password);
    new_user.save()
    .then(() => {
        response.redirect('/users/login');
    })
    .catch(err => console.log(err));
    request.session.error = 'Nombre de usuario no disponible';
    response.redirect('/users/signup');
};