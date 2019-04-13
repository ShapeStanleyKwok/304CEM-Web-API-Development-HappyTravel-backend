const mongoose = require('mongoose')

const user = new mongoose.Schema({
    id: mongoose.Schema.ObjectId,
    email: String,
    password: String,
    nickname: {
        type: String,
        default: 'HT.User'
    },
    avatar: {
        type: String,
        default: '/avatar.jpg'
    },
    DOB: {
        type: Date
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model("user", user)