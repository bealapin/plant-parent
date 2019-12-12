const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
var PlantModel = require('./models/plant.model')

require('dotenv').config()
const app = express();
const port = process.env.PORT || 3000;
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
    PlantModel.find().exec((err, plants) => {
        if (err) {
            console.log(err)
            res.status(500).send(err)
        } 
        res.render('plants', { plants: plants })
    })
})

app.post('/plants', (req, res, next) => {
    let filter = {}
    if(req.body.light) {
       filter.light = req.body.light   
    }
    if(req.body.window) {
       filter.window = req.body.window   
    }
    if(req.body.experience) {
       filter.difficulty = req.body.difficulty   
    }
    if(req.body.pets) {
       filter.pets = req.body.pets   
    } 
    let query = PlantModel.find(filter)
    query.exec((err, plants) => {
        if (err) {
            console.log(err)
            res.status(500).send(err)
        } 
        res.render('products', { plants: plants })
    })
})

app.get('/products', (req,res) => {
    let query = PlantModel.find() 
   if(req.body.light) {
       query.where('light').equals(req.body.light)   
   }
   if(req.body.windows) {
       query.where('windows').equals(req.body.window)   
   }
   if(req.body.experience) {
       query.where('difficulty').equals(req.body.difficulty)   
   }
   if(req.body.pets) {
       query.where('pets').equals(req.body.pets)   
   } 
    query.exec((err, plants) => {
        if (err) {
            console.log(err)
            res.status(500).send(err)
        } 
        res.render('products', { plants: plants })
    })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
