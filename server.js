const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const ShortUrl = require('./models/short');
const bodyParser = require("body-parser");

mongoose.connect('mongodb://localhost/EZShort', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connected to MongoDB database successfully");
});

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const endpoints = require('./routes/api/endpoints');

app.use('/api/endpoints', endpoints);

app.get('/undefined', (req, res) => {
  res.send("undefined");
})

app.get('/:redirect', (req, res) => {
  const shortreq = req.params.redirect;
  ShortUrl.findOne({ short: shortreq }, (err, doc) => {
    if(doc) {
      res.redirect(doc.full);
    } else {
      console.log(err);
    }
  })
})

app.listen(port, function() {
  console.log("Server is running on Port: " + port);
});