const mongoose = require('mongoose')

const user = new mongoose.Schema({
    id: mongoose.Schema.ObjectId,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        default: 'HTUser'
    },
    avatar: {
        type: String,
        default: '/avatar.jpg'
    },
    contry: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        default: ''
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


module.exports = {
    schema: user,
    model: mongoose.model("user", user)
}