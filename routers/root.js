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
                    login: {
                        href: '/api/user/login'
                    },
                    register: {
                        href: '/api/user/register'
                    },
                    destination: {
                        href: '/api/destination'
                    },
                    href: '/api/user/:id'
                },
            },
            message: 'success'
        }
    })

module.exports = router