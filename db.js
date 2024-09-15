const mongoose = require('mongoose')
require('dotenv').config()


const mongoUrl = process.env.DB_URL
// const mongoUrl = process.env.DB_URL_LOCAL

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
