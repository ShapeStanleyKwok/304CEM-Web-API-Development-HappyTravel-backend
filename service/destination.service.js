const DETINATION = require('../models/destination').model

module.exports = {

    create(doc) {
        return DETINATION.create(doc)
    },

    find(sortKey = 'created', min, max) {
        return DETINATION.find().sort(sortKey)
    },

    update(_id, description) {
        return DETINATION.findByIdAndUpdate(_id, {
            description
        })
    }
}