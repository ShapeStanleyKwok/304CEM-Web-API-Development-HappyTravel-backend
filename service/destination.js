const DETINATION = require('../models/destination').model

module.exports = {

    create(doc) {
        return DETINATION.create(doc)
    },

    find(sort = 'created') {
        return DETINATION.find().sort(sort)
    },

    update(_id, description) {
        return DETINATION.findByIdAndUpdate(_id, {
            description
        })
    }
}