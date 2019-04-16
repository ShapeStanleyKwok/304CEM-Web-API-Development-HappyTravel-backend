const router = require('koa-router')()
const commentService = require('../service/comment.service')

router
    /**
     * delete a comment 
     */
    .delete('/api/comment/:id', async ctx => {

        let _id = ctx.params.id

        if (!_id) {
            return ctx.body = {
                code: -1,
                message: 'please confirm the params'
            }
        }

        await commentService.delete(_id).then(() => {

            ctx.body = {
                code: 200,
                message: 'success'
            }
        })

    })
    /**
     * get comment list
     */
    .get('/api/comment', async ctx => {

        let userId = ctx.query.userId
        let destinationId = ctx.query.destinationId
        let sort = ctx.query.sort || 'created'

        let filter = {
            isDeleted: false
        }
        if (userId) filter.user = userId
        if (destinationId) filter.destination = destinationId


        let res = await commentService.find(sort, filter)

        ctx.body = {
            code: 200,
            data: res,
            message: 'success'
        }
    })

    /**
     * create a comment
     */
    .post('/api/comment', async ctx => {

        const {
            user,
            destination,
            content
        } = ctx.request.body


        if (!user || !destination || !content) {
            return ctx.body = {
                code: -1,
                message: 'please confirm the params'
            }
        }

        await commentService.create(ctx.request.body).then(res => {

            ctx.body = {
                code: 200,
                data: res,
                message: 'success'
            }
        })
    })


module.exports = router