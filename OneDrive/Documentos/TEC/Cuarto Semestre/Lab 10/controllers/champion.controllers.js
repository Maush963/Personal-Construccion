const Champion = require('../models/champion.model');

exports.get_create = (req, res) => {
    res.render("create",{
        username: req.session.username || "",
    });
}  // Path: views/create.ejs


exports.post_champion = (req, res) => {
    console.log(req.body);
    const myChampion = new Champion(req.body.name, req.body.level, req.body.health, req.body.attack, req.body.image);
    myChampion.save();
    res.setHeader('Set-Cookie', 'last_champ=' + myChampion.name + '; HttpOnly');
    res.redirect("/");
}


exports.get_root = (req, res) => {
    console.log(req.cookies);
    console.log(req.cookies.last_champ);
    res.render("index", { 
        champions: Champion.fetchAll(),
        last_champ: req.cookies.last_champ || '',
        username: req.session.username || '',
    });
} 
