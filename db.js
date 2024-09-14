const mongoose = require('mongoose')

const mongoUrl =   'mongodb://localhost:27017/hotel'

mongoose.connect(mongoUrl)

const db = mongoose.connection

db.on('connected', () => {
    console.log('Connected to server')
})
db.on('error', () => {
    console.log('error')
})
db.on('disconnected', () => {
    console.log('Disconnected to server')
})


module.exports = db;
