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
    let query = PlantModel.find() 
    // if(res.body.light) {
    //     query.where('light').equals(res.body.light)   
    // }
    // if(res.body.windows) {
    //     query.where('windows').equals(res.body.window)   
    // }
    // if(res.body.experience) {
    //     query.where('experience').equals(res.body.experience)   
    // }
    // if(res.body.pets) {
    //     query.where('pets').equals(res.body.pets)   
    // } 
    query.exec((err, plants) => {
        if (err) {
            console.log(err)
            res.status(500).send(err)
        } 
        res.render('products', { plants: plants })
    })
})

app.get('/', (req,res) => {
    let query = PlantModel.find({light : res.body.light}) 
    // if(res.body.light) {
    //     query.where('light').equals(res.body.light)   
    // }
    // if(res.body.windows) {
    //     query.where('windows').equals(res.body.window)   
    // }
    // if(res.body.experience) {
    //     query.where('experience').equals(res.body.experience)   
    // }
    // if(res.body.pets) {
    //     query.where('pets').equals(res.body.pets)   
    // } 
    query.exec((err, plants) => {
        if (err) {
            console.log(err)
            res.status(500).send(err)
        } 
        res.render('plants', { plants: plants })
    })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})