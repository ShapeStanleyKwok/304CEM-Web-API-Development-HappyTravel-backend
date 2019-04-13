const router = require('koa-router')()
const fs = require('fs')
const path = require('path')


router
    .post('/api/file', async ctx => {

        let file = ctx.request.files.file

        if (!file) {
            return ctx.body = {
                code: -1,
                message: 'the file does not exist'
            }
        }

        let reader = fs.createReadStream(file.path)
        let writer = fs.createWriteStream(path.join(__dirname, '../static/upload/', file.name))

        reader.pipe(writer)

        ctx.body = {
            code: 200,
            data: {
                path: '/upload/' + file.name
            },
            message: 'success'
        }
    })

module.exports = router