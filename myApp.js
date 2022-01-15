var express = require('express');
var app = express();

const staticFilesPath = __dirname + '/public';
app.use('/',express.static(staticFilesPath));

console.log('Hello World');

// app.get('/', (req, res) => {
//   res.send('Hello Express');
// });

app.get('/', (req, res) => {
  absolutePath = __dirname + '/views/index.html';
  res.sendFile(absolutePath);
});

module.exports = app;
