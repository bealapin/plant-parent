const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
var plantModel = require('./models/plant.model')

var mongoDB = 'mongodb+srv://dbUser:55CBB@cluster0-qgkz5.mongodb.net/plants?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('DB connection succesful!'));

var db = mongoose.connection

app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(urlencodedParser)

const plants = [
    { "_id": 1, name: "SANSEVIRIA", type: "easy", light: ["low", "medium", "bright"], window: ["east", "south", "north", "west"], pets: "false" },
    { "_id": 2, name: "ALOE VERA", type: "easy", light: ["medium", "bright"], wmindow: ["east", "south", "west"], pets: "false" },
    { "_id": 3, name: "ASPARAGUS_FERN", "type": "easy", light: "medium", window: ["south", "west ", "east"], pets: "true" },
    { "_id": 4, name: "CHINESE EVERGREEN", type: "easy", light: ["low", "medium"], window: ["east", "west"], pets: "true" },
    { "_id": 5, name: "AMERICAN RUBBER PLANT", type: "easy", light: ["medium", "bright"], window: ["east", "west", "south"], "pets": "true" },
    { "_id": 6, name: "DRACENA", type: "easy", light: ["low", "medium"], window: ["north", "west", "east", "south"], pets: "no" },
    { "_id": 7, name: "GOLDEN BARREL CACTUS", type: "easy", light: ["medium", "bright"], window: ["east ", "west"], pets: "yes" },
    { "_id": 8, name: "HEARTLEAF PHILODENDRON", type: "easy", light: ["low", "medium"], window: ["sout", "east ", "north"], pets: "no" },
    { "_id": 9, name: "LIPSTICK PLANT", type: "easy", light: ["low", "meidum"], window: ["east", "west"], pets: "yes" },
    { "_id": 10, name: "UMBRELLA TREE", type: "easy", light: ["medium", "bright"], window: ["east", "west"], pets: "no" },
]

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

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

