const jwt = require('jsonwebtoken')

class Token {


    encode(payload, time = '2 days') {
        return jwt.sign(payload, 'token', typeof payload !== 'number' && typeof payload !== 'string' && {
            expiresIn: time
        })
    }

    decode(token) {
        try {
            token = jwt.verify(token, 'token')
            return {
                verify: true,
                data: token
            }
        } catch (err) {
            return {
                verify: false,
                data: err
            }
        }
    }
}

module.exports = new Token()