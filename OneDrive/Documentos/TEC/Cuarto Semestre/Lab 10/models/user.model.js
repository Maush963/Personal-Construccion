const db = require ('../util/database');
const bcrypt = require('bcryptjs');


module.exports = class User {
    //class constructor
    constructor(my_username, my_name, my_password){
        this.username = my_username;
        this.name = my_name;
        this.password = my_password;
    }


    //function to save the user in the database
    save() {
        return bcrypt.hash(this.password, 12)
            .then((password_cript) => {
                return db.execute(
                'INSERT INTO user (username, name, password) VALUES (?, ?, ?)',
                [this.username, this.name, password_cript]);
            })
            .catch(err => console.log(err));
    }

    static fetchOne(username) {
        return db.execute('SELECT * FROM user WHERE username = ?', [username]);
    }
}