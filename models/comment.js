const mongoose = require('mongoose')
const preMiddleware = require('../utils/dbhelper').preMiddleware


const comment = new mongoose.Schema({
    id: mongoose.Schema.ObjectId,
    userId: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'user'
    },
    destinationId: {
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
    isDelete: {
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