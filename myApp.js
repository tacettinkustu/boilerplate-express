require('dotenv').config();
var express = require('express');
var app = express();

// app.use('/public', express.static(__dirname + '/public'));

// console.log('Hello World');

// // app.get('/', (req, res) => {
// //   res.send('Hello Express');
// // });

// app.get('/', (req, res) => {
//   absolutePath = __dirname + '/views/index.html';
//   return res.sendFile(absolutePath);
// });
console.log(process.env.MESSAGE_STYLE)
app.get('/json', (req, res) => {
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    return res.json({ message: 'HELLO JSON' });
  } else {
    return res.json({ message: 'Hello json' });
  }
});

module.exports = app;
