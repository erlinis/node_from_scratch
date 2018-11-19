const http = require('http');

http.createServer( (req, res) => {
  // Writes plain text or html
  // res.write('<h1>Hello world</h1>');


  //Writes a JSOn output
  res.writeHead(200, {'Content-Type': 'application/json' });

  let output = {
    name: 'Erlinis',
    lastname: 'Quintana',
    age: 31,
    technologies: 'Ruby, RoR, Node'
  }

  res.write(JSON.stringify(output));
  res.end();
})
.listen(8080);

console.log('Listening on 8080');
