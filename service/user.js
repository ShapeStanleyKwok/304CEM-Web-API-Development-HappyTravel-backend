const USER = require('../models/user').model

module.exports = {

    find(key, value) {
        return USER.findOne({
            [key]: value
        })

    },

    register(email, password) {
        return USER.create({
            email,
            password
        })
    },

    login(email, password) {
        return USER.findOne({
            email,
            password
        })
    },

    update(_id, user) {
        return USER.findByIdAndUpdate(
            _id, {
                user
            }
        )

    }
}