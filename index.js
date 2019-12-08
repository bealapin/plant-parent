const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
var plantModel = require('./models/plant.model')

require('dotenv').config()
const app = express();
const port = 3000;
const urlencodedParser = bodyParser.urlencoded({ extended: false })

var mongoDB = process.env.MONGO_CONNECT_URI
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.static('public'));
app.use(urlencodedParser)
app.set('view engine', 'pug')


app.get('/', (req, res) => {
    res.render('home', {});
  });

app.get('/plants', (req, res) => {
  res.render('plants', {})
})

app.get('/products', (req, res) => {
    res.render('products', {})
  })

app.post('/products', (req, res) => {
    res.render('products', {})
  })

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});