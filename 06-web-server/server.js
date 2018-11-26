const express = require('express')
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS Engine
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
  res.render('home', {
    user: 'Erlinis'
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(port, () =>{
  console.log(`Listening in port ${port}`);
});
