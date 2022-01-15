var express = require('express');
var app = express();

const middlewareFunc = (req, res, next) => {
  const staticFilesPath = __dirname + '/public';
  express.static(staticFilesPath);
  next();
};
app.use(middlewareFunc);

console.log('Hello World');

// app.get('/', (req, res) => {
//   res.send('Hello Express');
// });

app.get('/', (req, res) => {
  absolutePath = __dirname + '/views/index.html';
  res.sendFile(absolutePath);
});

module.exports = app;
