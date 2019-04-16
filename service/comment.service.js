const COMMENT = require('../models/comment').model
module.exports = {

    create(doc) {
        return COMMENT.create(doc)
    },

    find(sortKey, filter) {
        return COMMENT.find(filter)
            .sort({
                [sortKey]: 1
            })
            .populate('user', ['nickname', 'avatar'])
            .populate('destination', ['name'])
    },


    delete(_id) {
        return COMMENT.findByIdAndUpdate(_id, {
            isDeleted: true
        })
    }
}