const mongoose = require('mongoose')
const userSchema = require("./user").schema

const comment = new mongoose.Schema({
    id: mongoose.Schema.ObjectId,
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
    },
    user: userSchema
})


module.exports = {
    schema: comment,
    model: mongoose.model("comment", comment)
}