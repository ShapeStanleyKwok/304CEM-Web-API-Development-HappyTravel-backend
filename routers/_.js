const router = require('koa-router')()

router
    .get('/', async ctx => {

        ctx.body = {
            code: 200,
            _links: {
                self: {
                    href: '/'
                },
                user: {
                    href: '/api/user'
                },
            },
            message: 'success'
        }
    })

module.exports = router