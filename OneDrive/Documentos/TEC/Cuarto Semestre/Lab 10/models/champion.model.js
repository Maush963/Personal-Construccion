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
    constructor(name, level, health, attack, image) {
      this.name = name;
      this.level = level;
      this.health = health;
      this.attack = attack;
      this.image = image;
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
