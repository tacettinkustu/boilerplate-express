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

// app.get('/json', (req, res) => {
//   if (process.env.MESSAGE_STYLE === 'uppercase') {
//     return res.json({ message: 'HELLO JSON' });
//   } else {
//     return res.json({ message: 'Hello json' });
//   }
// });
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
};
app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello Express');
});

app.get(
  '/now',
  function (req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function (req, res) {
    res.json({ time: req.time });
  }
);

app.get(
  '/:word/echo',
  res.json({echo: req.params.word})
)

module.exports = app;
