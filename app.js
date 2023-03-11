const express = require('express');
const catalogRouter = require('./routes/catalog');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const mongoDB =
  'mongodb+srv://admin:jelkokelkojelkomerlin@cluster0.3c7sisj.mongodb.net/blogging';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

require("dotenv").config();
const port = process.env.PORT 

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(bodyParser.json());
app.use(cors());
app.use('/', catalogRouter);

app.listen(port, function () {
  console.log('Server started successfully');
});
module.exports = app;

// const express = require('express');
// const Quote = require('inspirational-quotes');
// const app = express();
// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });
// app.get('/', function (req, res) {
//   res.send(Quote.getQuote());
// });

// app.listen(2000, function () {
//   console.log('Server started successfully');
// });
