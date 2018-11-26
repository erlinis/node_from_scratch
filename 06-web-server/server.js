const express = require('express')
const app = express();
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
  res.render('home', {
    user: 'Erlinis',
    year: new Date().getFullYear()
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    year: new Date().getFullYear()
  });
});

app.get('/data', function (req, res) {
  let output = {
    name: 'Erlinis',
    lastname: 'Quintana',
    age: 31,
    technologies: 'Ruby, RoR, Javascript, Node'
  }

  res.send(output);
});
app.listen(3000);
