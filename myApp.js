require('dotenv').config();
var express = require('express');
var app = express();

app.use('/public', express.static(__dirname + '/public'));

console.log('Hello World');

// app.get('/', (req, res) => {
//   res.send('Hello Express');
// });

app.get('/', (req, res) => {
  absolutePath = __dirname + '/views/index.html';
  return res.sendFile(absolutePath);
});

app.get('/json', (req, res) => {
  process.env.MESSAGE_STYLE === 'uppercase'
    ? res.json({ message: 'HELLO JSON' })
    : res.json({ message: 'Hello json' });
});

module.exports = app;
