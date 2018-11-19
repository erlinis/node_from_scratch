const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'));

// app.get('/', function (req, res) {
//   res.send('Hello World Express');
// });

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
