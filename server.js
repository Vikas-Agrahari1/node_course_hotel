const express = require("express")
const app = express()
const db = require('./db.js')
require('dotenv').config()



const bodyParser = require('body-parser')
app.use(bodyParser.json())


app.get('/', function (req, res){
    res.send('Welcome To My hotel')
})

const personRouts = require('./routes/personRouts.js')
const menuRouts = require('./routes/menuRouts.js')

app.use('/person', personRouts)
app.use('/menu', menuRouts)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('listinig port 3000')
})


//coment for testing
