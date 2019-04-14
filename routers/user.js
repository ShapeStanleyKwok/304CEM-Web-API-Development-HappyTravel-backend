const router = require('koa-router')()
const USER = require('../service/user.service')

router
    /**
     * register
     */
    .post('/api/user', async ctx => {

        const {
            email,
            password
        } = ctx.request.body


        // check 
        let isExist = await USER.find('email', email)
        if (isExist) {
            return ctx.body = {
                code: -1,
                message: 'the email already exists'
            }
        }

        // register
        let user = await USER.register(email, password)

        ctx.body = {
            code: 200,
            data: {
                _id: user._id
            },
            message: 'success'
        }
    })
    /**
     * authorization
     * 
     * authorization:'HT <email>:<password>'
     */
    .post('/api/user/authorization', async ctx => {

        const authorization = ctx.headers.authorization
        if (!authorization) {
            return ctx.body = {
                code: -1,
                message: 'please set the request header [Authorization]'
            }
        }

        let auth = authorization.replace('HT ', '').split(':')
        let email = auth[0]
        let password = auth[1]

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
            message: 'success'
        }

    })
    /**
     * update userinfo
     */
    .put('/api/user/:id', async ctx => {

        const _id = ctx.params.id
        const user = ctx.request.body

        await USER.update(_id, user).then(res => {
            if (res) {
                ctx.body = {
                    code: 200,
                    message: 'success'
                }
            }

        })
    })


module.exports = router