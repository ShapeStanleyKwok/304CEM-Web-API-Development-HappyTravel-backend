const DETINATION = require('../models/destination').model

module.exports = {

    create(doc) {
        return DETINATION.create(doc)
    },

    find(sortKey = 'created', filter) {
        return DETINATION.find(filter).sort({
            [sortKey]: -1
        })
    },

    update(_id, body) {
        return DETINATION.findByIdAndUpdate(_id, body)
    },

    delete(_id) {
        return DETINATION.findByIdAndUpdate(_id, {
            isDeleted: true
        })
    }
}