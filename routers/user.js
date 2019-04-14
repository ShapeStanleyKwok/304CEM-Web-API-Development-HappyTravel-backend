const router = require('koa-router')()
const USER = require('../service/user')

router
    /**
     * register
     */
    .post('/api/user/register', async ctx => {

        const {
            email,
            password
        } = ctx.request.body


        // check 
        let isExist = await USER.find('email', email)
        if (isExist) {
            return ctx.body = {
                code: -1,
                message: 'the user already exists'
            }
        }

        // register
        let user = await USER.register(email, password)

        ctx.body = {
            code: 200,
            data: {
                _id: user._id
            },
            _links: {
                self: {
                    href: '/api/user/register'
                },
                login: {
                    href: '/api/user/login'
                },
                user: {
                    href: '/api/user'
                }
            },
            message: 'success'
        }
    })
    /**
     * login
     * 
     * authorization:'HT <email>:<password>'
     */
    .post('/api/user/login', async ctx => {


        let auth = ctx.headers.authorization.replace('HT ', '').split(':')
        let email = auth[0],
            password = auth[1]



        let user = await USER.login(email, password)

        // login fail
        if (!user) {
            return ctx.body = {
                code: -1,
                message: 'login failed,confirm your email and password'
            }
        }

        // login success
        ctx.body = {
            code: 200,
            data: {
                _id: user._id
            },
            _links: {
                self: {
                    href: '/api/user/login'
                },
                register: {
                    href: '/api/user/register'
                },
                user: {
                    href: '/api/user'
                }
            },
            message: 'success'
        }
    })
    /**
     * get userinfo
     */
    .get('/api/user/:id', async ctx => {

        const _id = ctx.params.id

        let user = await USER.find({
            _id
        })

        if (!user) {
            return ctx.body = {
                code: -1,
                message: 'fail to get user information'
            }
        }

        ctx.body = {
            code: 200,
            data: {
                email: user.email,
                nickname: user.nickname,
                avatar: user.avatar,
                DOB: user.DOB,
                country: user.country,
                address: user.address,
                creted: user.creted,
                updated: user.updated
            },
            _links: {
                self: {
                    href: '/api/user'
                }
            },
            message: 'success'
        }

    })
    /**
     * update userinfo
     */
    .put('/api/user/:id', async ctx => {

        const _id = ctx.params.id
        const user = ctx.request.body

        user['updated'] = Date.now()

        await USER.update(_id, user).then(res => {
            if (res) {
                ctx.body = {
                    code: 200,
                    _links: {
                        self: {
                            href: '/api/user'
                        }
                    },
                    message: 'success'
                }
            }

        })
    })


module.exports = router