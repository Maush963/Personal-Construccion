const champions = [
    {
      name: "Jinx", 
      level: 1, 
      health: 600, 
      attack: 55, 
      image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg",
    },
    {
      name: "Yasuo", 
      level: 1, 
      health: 570, 
      attack: 60, 
      image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg",
    }
  ];

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
      champions.push(this);
    }
  //the function fetchAll() is a method of the model that returns all the data from the database
    static fetchAll() {
      return champions;
    }
  }
