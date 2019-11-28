const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const urlencodedParser = bodyParser.urlencoded({extended: false})
const Schema = mongoose.Schema;

const plantSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    light: {
        type: Array,
        required: true,
    },
    window: {
        type: Array,
        required: true,
    },
    image: {
        type: String,
        require: true,
    },
    pets: {
        type: Boolean,
        required: true,
    }

})

module.exports = mongoose.model('Plants', productSchema);

app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(urlencodedParser)

const plants = [
{ "_id" :1, name : "SANSEVIRIA", type : "easy", light : [ "low", "medium", "bright" ], window : [ "east", "south", "north", "west" ], pets : "false" },
{ "_id" : 2, name : "ALOE VERA", type : "easy", light : [ "medium", "bright" ], window : [ "east", "south", "west" ], pets : "false" },
{ "_id" : 3, name : "ASPARAGUS_FERN", "type" : "easy", light : "medium", window : [ "south", "west ", "east" ], pets : "true" },
{ "_id" : 4, name : "CHINESE EVERGREEN", type : "easy", light : [ "low", "medium" ], window : [ "east", "west" ], pets : "true" },
{ "_id" : 5, name : "AMERICAN RUBBER PLANT", type: "easy", light : [ "medium", "bright" ], window : [ "east", "west", "south" ], "pets" : "true" },
{ "_id" : 6, name : "DRACENA", type : "easy", light : [ "low", "medium" ], window : [ "north", "west", "east", "south" ], pets : "no" },
{ "_id" : 7, name : "GOLDEN BARREL CACTUS", type : "easy", light : [ "medium", "bright" ], window : [ "east ", "west" ], pets : "yes" },
{ "_id" : 8, name : "HEARTLEAF PHILODENDRON", type : "easy", light : [ "low", "medium" ], window : [ "sout", "east ", "north" ], pets : "no" },
{ "_id" : 9, name : "LIPSTICK PLANT", type : "easy", light : [ "low", "meidum" ], window : [ "east", "west" ], pets : "yes" },
{ "_id" : 10, name : "UMBRELLA TREE", type : "easy", light : [ "medium", "bright" ], window : [ "east", "west" ], pets : "no" },
]

mongoose.connect('mongodb://localhost:27017/plants', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
}).then (() => console.log('DB connection succesful!'));

const superHeroSchema = new mongoose.Schema({
    name: String
  });


app.post('/products', urlencodedParser, (req, res) =>{
    console.log(req.body)
    res.status(200).json(plants)
})

// app.get('api/v1/plants', (req, res) =>{
//     res.status(200).json(plants)
// })

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })

  