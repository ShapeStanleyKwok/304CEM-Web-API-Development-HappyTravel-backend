const mongoose = require('mongoose')
const preMiddleware = require('../utils/dbhelper').preMiddleware


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
    isDeleted: {
        type: Boolean,
        default: false
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

destination.pre('update', preMiddleware)


module.exports = {
    schema: destination,
    model: mongoose.model("destination", destination)
}