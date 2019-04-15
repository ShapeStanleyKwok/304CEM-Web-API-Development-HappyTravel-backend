const router = require('koa-router')()

router
    .get('/api', async ctx => {

        ctx.body = {
            self: '/api',
            user: {
                userInfo: '/api/user/{id}',
                authorization: '/api/user/authorization',
                register: '/api/user'
            },
            destination: '/api/destination/{id}',
            file: '/api/file'
        }
    })

module.exports = router