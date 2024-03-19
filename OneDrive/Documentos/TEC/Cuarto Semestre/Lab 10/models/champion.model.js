const db = require('../util/database');

//the array champions is used to store the data
  module.exports = class Champion {

    //the constructor is used to initialize the object
    constructor(my_name, my_level, my_health, my_attack, my_image) {
      this.name = my_name;
      this.level = my_level;
      this.health = my_health;
      this.attack = my_attack;
      this.image = my_image;
    }

  //the function save() is a method of the model that saves the data in the database
    save() {
      return db.execute('INSERT INTO champion (name, level, health, attack, image) VALUES (?, ?, ?, ?, ?)',
      [this.name, this.level, this.health, this.attack, this.image]
      );
    }
  //the function fetchAll() is a method of the model that returns all the data from the database
    static fetchAll() {
      return db.execute('SELECT * FROM champion');
    }
  

    static fetch(id) {
    if (id){
      return this.fetchOne(id);
    }else{
      return this.fetchAll();
    }
  }

    static fetchOne(id) {
      return db.execute('SELECT * FROM champion WHERE id = ?', [id]);
    }

    static update(id, name, level, health, attack, image) {
      return db.execute(`UPDATE champion SET 
          name = ?, level = ?, health = ?, attack = ?, image = ?
          WHERE id = ?`, 
          [name, level, health, attack, image, id]);
  }
  
}


