const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: [true, "Firstname is required"]
    }, 
    lastname: {
        type: String,
        required: [true, "Lastname is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'cook'],
        require: true
    }
    
})

const UserModel = mongoose.model("user", UserSchema)
module.exports = UserModel