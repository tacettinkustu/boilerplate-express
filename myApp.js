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
  res.sendFile(absolutePath);
});

app.get('/json', (req, res) => {
  const text = 'Hello json';
  res.json({
    message: `${process.env.MESSAGE_STYLE == 'uppercase' ? text.toUpperCase() : text}`,
  });
});

module.exports = app;
