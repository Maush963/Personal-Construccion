const express = require('express');
const router = express.Router();


const html_header = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>League of Legends</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    </head>
    <body>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item" href="/">
                <img src="https://logosmarcas.net/wp-content/uploads/2020/11/League-of-Legends-Logo-2009-2019.jpg" width="112" height="28">
              </a>
          
              <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
          
            <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-start">
                <a class="navbar-item" href="/">
                  Home
                </a>
          
                <a class="navbar-item" href="/create">
                  Create
                </a>
          
                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">
                    More
                  </a>
          
                  <div class="navbar-dropdown">
                    <a class="navbar-item">
                      About
                    </a>
                    <a class="navbar-item">
                      Jobs
                    </a>
                    <a class="navbar-item">
                      Contact
                    </a>
                    <hr class="navbar-divider">
                    <a class="navbar-item">
                      Report an issue
                    </a>
                  </div>
                </div>
              </div>
          
              <div class="navbar-end">
                <div class="navbar-item">
                  <div class="buttons">
                    <a class="button is-primary">
                      <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>

        <section class="section">
            <div class="container">
`;

const html_footer = `
    </div>
    </section>
    <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </div>
    </footer>
  </body>
</html>
`;


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
res.setHeader('Content-Type', 'text/html');
res.write(html_header);
res.write(`
            <h2 class="title">Welcome to the Summoner's Rift!</h2>
            <div class="columns">`
);

champions.forEach(champion => {
    res.write(`
        <div class="column">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="${champion.image}" alt="${champion.name}">
                    </figure>
                </div>
                <div class="card-content">
                    <p class="title is-4">${champion.name}</p>
                    <p>Level: ${champion.level}</p>
                    <p>Health: ${champion.health}</p>
                    <p>Attack: ${champion.attack}</p>
                </div>
            </div>
        </div>
    `);
});

    res.write(`
                </div>
            </div>
        </section>
    `);
    res.write(html_footer);
    res.end();
});




router.get("/create", (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write(html_header);
  res.write(`
              <h2 class="title">Create Your Champion</h2>
              <form action="/champion" method="post">
                  <div class="field">
                      <label class="label">Name</label>
                      <div class="control">
                          <input class="input" type="text" name="name" placeholder="Champion Name">
                      </div>
                  </div>
                  <div class="field">
                      <label class="label">Level</label>
                      <div class="control">
                          <input class="input" type="number" name="level" placeholder="Champion Level">
                      </div>
                  </div>
                  <div class="field">
                      <label class="label">Health</label>
                      <div class="control">
                          <input class="input" type="number" name="health" placeholder="Champion Health">
                      </div>
                  </div>
                  <div class="field">
                      <label class="label">Attack</label>
                      <div class="control">
                          <input class="input" type="number" name="attack" placeholder="Champion Attack">
                      </div>
                  </div>
                  <div class="field">
                      <label class="label">Image URL</label>
                      <div class="control">
                          <input class="input" type="text" name="image" placeholder="URL of Champion Image">
                      </div>
                  </div>
                  <div class="field is-grouped">
                      <div class="control">
                          <button class="button is-link" type="submit">Submit</button>
                      </div>
                      <div class="control">
                          <button class="button is-link is-light" type="reset">Reset</button>
                      </div>
                  </div>
              </form>
          </div>
      </section>
  `);
  res.write(html_footer);
  res.end();
});


router.post("/champion", (req, res) => {
  const { name, level, health, attack, image } = req.body;
  champions.push({ name, level, health, attack, image });
  res.redirect("/");
});


router.use((req, res, next) => {
    res.status(404);
    let html = html_header;
    html += `<h2 class="title">Esta no es la grieta del invocador</h2>`;
    html += html_footer;
    res.send(html);
});

module.exports = router;