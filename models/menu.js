const mongoose = require('mongoose')
const menuSchema = mongoose.Schema

const newMenu = new menuSchema({
    name : {
        type : String,
        require : true
    },
    taste : {
        type : String,
        enum : ['Sweet', 'Soure', 'Spicy']
    },
    ingridente : {
        type : String,
        default : []
    },
    price : {
        type : Number,
        default : 2

    }

})


const menu = mongoose.model('menu', newMenu)
module.exports = menu