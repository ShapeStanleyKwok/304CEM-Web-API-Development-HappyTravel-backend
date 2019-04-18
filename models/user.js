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
        default: 'nickName'
    },
    avatar: {
        type: String,
        default: '/avatar.jpg'
    },
    address: {
        type: String,
        default: ''
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