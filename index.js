const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
var plantModel = require('./models/plant.model')

require('dotenv').config()
const app = express()

var mongoDB = process.env.MONGO_CONNECT_URI

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('DB connection succesful!'));

var db = mongoose.connection

app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(urlencodedParser)

app.get('/', (req, res) => {
plantModel.find().exec((err, plants) => {
    if (err) {
        res.status(500).send(err)
    }
    res.render('index', { plants: plants })
})
})
app.get('/plants', (req,res) => {
let query = plantModel.find()  
if(res.body.type) {
    query.where('type').equals(res.body.type)   
}
if(res.body.light) {
    query.where('light').equals(res.body.light)   
}
if(res.body.window) {
    query.where('window').equals(res.body.window)   
}
if(res.body.pets) {
    query.where('pets').equals(res.body.pets)   
}

query.exec((err, plants) => {
    if (err) {
        res.status(500).send(err)
    }
    res.render('index', { plants: plants })
});
})
app.get('/', (req, res) => {
    res.render('index', {})
});

app.get('/plants', (req, res) => {
    res.render('plants', {});
});

app.post('/plants', (req, res) => {
    res.render('index', { plants })
});

plantModel.find({experience: 'easy'}).where('plants');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(port, () => console.log(`http://localhost:${port}`));
