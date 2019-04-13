const mongoose = require('mongoose')
const commentsSchema = require('./comment').schema

const destination = new mongoose.Schema({
    id: mongoose.Schema.ObjectId,
    name: {
        type: String,
        required: true
    },
    banner: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
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
    },
    comments: [commentsSchema]
})


module.exports = {
    schema: destination,
    model: mongoose.model("destination", destination)
}