var express = require('express');
var app = express();


app.use(function (req, res, next) {
    const staticFilesPath = __dirname + '/public';
    express.static(staticFilesPath)
    next();
});

console.log('Hello World');

// app.get('/', (req, res) => {
//   res.send('Hello Express');
// });

app.get('/', (req, res) => {
  absolutePath = __dirname + '/views/index.html';
  res.sendFile(absolutePath);
});

module.exports = app;
