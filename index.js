const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
var plantModel = require('./models/plant.model')


require('dotenv').config()


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
        ;
});


app.get('/', (req, res) => {
    res.render('index', {});
});

app.get('/plants', (req, res) => {
    res.render('plants', {});
});

app.post('/plants', (req, res) => {
    res.render('index', { plants })
});

plantModel.find({experience: 'easy'}).where('plants')

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

