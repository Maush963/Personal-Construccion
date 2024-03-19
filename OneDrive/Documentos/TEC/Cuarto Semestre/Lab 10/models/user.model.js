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
        .then(async (encrypted_password) => {
            try {
                await db.execute(
                    `INSERT INTO user (username, name, password) 
                    VALUES (?, ?, ?)`, 
                    [this.username, this.name, encrypted_password]
                );
                
                return db.execute(
                    'INSERT INTO assigns (username, role_id) VALUES (?, 1)', 
                    [this.username]
                );
            } catch(error) {
                console.log(error);
                throw Error('Duplicate user');
            }
        });
    }

    static fetchOne(username) {
        return db.execute('SELECT * FROM user WHERE username = ?', [username]);
    }

    static getPermissions(username) {
        return db.execute(`
            SELECT permission
            FROM privilege pr, owns o, role r, assigns a, user u
            WHERE u.username = ? AND u.username = a.username AND
            a.role_id = r.id AND r.id = o.role_id AND o.permission_id = pr.id
        `, [username]);
    }
    
}


