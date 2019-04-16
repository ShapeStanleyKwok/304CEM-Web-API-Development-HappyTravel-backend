const mongoose = require('mongoose')
const preMiddleware = require('../utils/dbhelper').preMiddleware


const comment = new mongoose.Schema({
    id: mongoose.Schema.ObjectId,
    user: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'user'
    },
    destination: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'destination'
    },
    gallery: {
        type: Array,
        default: []
    },
    content: {
        type: String,
        default: ''
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now
    }
})

comment.pre('update', preMiddleware)

module.exports = {
    schema: comment,
    model: mongoose.model("comment", comment)
}