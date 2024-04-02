const Champion = require('../models/champion.model');

exports.get_create = (req, res) => {
    res.render("create",{
        username: req.session.username || "",
        csrfToken: req.csrfToken(),
        permissions: req.session.permissions || [],
    });
}  // Path: views/create.ejs


exports.post_champion = (req, res) => {
    console.log(req.body);
    console.log(req.file);
    const myChampion = new Champion(req.body.name, req.body.level, req.body.health, req.body.attack, req.file.filename);
    myChampion.save().then(([rows, fieldData]) => {
    res.setHeader('Set-Cookie', 'last_champ=' + myChampion.name + '; HttpOnly');
    res.redirect("/");
}).catch(err => console.log(err));
}


exports.get_root = (req, res) => {
    console.log(req.cookies);
    console.log(req.cookies.last_champ);
    Champion.fetch(req.params.Champion_id).then(([rows, fieldData]) => {
        //console.log(FieldData);
    res.render("index", { 
        champions: rows,
        last_champ: req.cookies.last_champ || '',
        username: req.session.username || '',
        permissions: req.session.permissions || [],
    });
}).catch(err => console.log(err));
} 
