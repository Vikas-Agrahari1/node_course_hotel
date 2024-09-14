const express = require("express")
const app = express()
const db = require('./db.js')



const bodyParser = require('body-parser')
app.use(bodyParser.json())


app.get('/', function (req, res){
    res.send('Welcome To My hotel')
})

const personRouts = require('./routes/personRouts.js')
const menuRouts = require('./routes/menuRouts.js')

app.use('/person', personRouts)
app.use('/menu', menuRouts)



app.listen(3000, () => {
    console.log('listinig port 3000')
})


//coment for testing
