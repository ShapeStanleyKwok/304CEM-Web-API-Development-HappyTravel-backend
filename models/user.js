const mongoose = require('mongoose')

const preMiddleware = require('../utils/dbhelper').preMiddleware

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

user.pre('update', preMiddleware)


module.exports = {
    schema: user,
    model: mongoose.model("user", user)
}