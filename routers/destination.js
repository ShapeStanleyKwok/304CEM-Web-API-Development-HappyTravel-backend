const router = require('koa-router')()
const DESTINATION = require('../service/destination.service')

router
    /**
     * delete a destination 
     */
    .delete('/api/destination/:id', async ctx => {

        let _id = ctx.params.id

        if (!_id) {
            return ctx.body = {
                code: -1,
                message: 'please confirm the parameters'
            }
        }

        await DESTINATION.delete(_id).then(res => {

            ctx.body = {
                code: 200,
                message: 'success'
            }
        })

    })
    /**
     * get destination by id
     */
    .get('/api/destination/:id', async ctx => {

        let _id = ctx.params.id

        if (!_id) {
            return ctx.body = {
                code: -1,
                message: 'please confirm the parameters'
            }
        }

        let filter = {
            _id: _id,
            isDeleted: false
        }

        let res = await DESTINATION.find('created', filter)

        ctx.body = {
            code: 200,
            data: res,
            message: 'success'
        }
    })
    /**
     * get destination
     */
    .get('/api/destination', async ctx => {

        let min = ctx.query.min
        let max = ctx.query.max
        let sort = ctx.query.sort

        // filter
        let userId = ctx.query.userId

        let filter = {
            isDeleted: false
        }
        if (userId) filter.userId = userId


        if (!min || !max) {
            return ctx.body = {
                code: -1,
                message: 'query params error'
            }
        }

        let res = await DESTINATION.find(sort, filter)

        ctx.body = {
            code: 200,
            data: res.slice(min, max),
            message: 'success'
        }
    })
    /**
     * update a destination 
     */
    .put('/api/destination/:id', async ctx => {


        let _id = ctx.params.id
        let body = ctx.request.body

        if (!_id || !body) {
            return ctx.body = {
                code: -1,
                message: 'please confirm the parameters'
            }
        }   


        await DESTINATION.update(_id, body).then(res => {

            ctx.body = {
                code: 200,
                data: res,
                message: 'success'
            }
        })

    })
    /**
     * create a destination
     */
    .post('/api/destination', async ctx => {

        const {
            name,
            banner
        } = ctx.request.body


        if (!name || !banner) {
            return ctx.body = {
                code: -1,
                message: 'please confirm the parameters'
            }
        }

        await DESTINATION.create(ctx.request.body).then(res => {

            ctx.body = {
                code: 200,
                data: res,
                message: 'success'
            }
        })
    })


module.exports = router