const Modelo = require('../models/champion.model');


exports.get_root = (req, res) => {
    res.render("index", { champions: Modelo.fetchAll() });
}  


exports.get_create = (req, res) => {
    res.render("create");
}  // Path: views/create.ejs


exports.post_champion = (req, res) => {
    console.log(req.body);
    const myChampion = new Modelo(req.body.name, req.body.level, req.body.health, req.body.attack, req.body.image);
      //the function save() is a method of the model that saves the data in the database
      champions.save();
      res.redirect("/");
}  // Path: views/create.ejs
