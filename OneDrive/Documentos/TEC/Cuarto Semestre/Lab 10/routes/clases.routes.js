const express = require('express');
const router = express.Router();


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



router.get("/", (req, res) => {
  res.render("index", { champions });
});




router.get("/create", (req, res) => {
  res.render("create");
});


router.post("/champion", (req, res) => {
  const { name, level, health, attack, image } = req.body;
  champions.push({ name, level, health, attack, image });
  res.redirect("/");
});

router.get('/una-ruta', (request, response, next) => {
  response.sendFile(path.join(__dirname, '..', 'views', 'clash_of_clans.html'));
});
                    

router.use((req, res, next) => {
    res.status(404);
    res.render('404');
});

module.exports = router;