const static = require('koa-static')
const koaBody = require('koa-body')
const cors = require('koa2-cors')

const error = require('./middlewares/error')
const logger = require('./middlewares/logger')
const path = require('path')
const mongoose = require('mongoose')

const routers = require('./routers/index')
const config = require('./config')
const Koa = require('koa')
const app = new Koa()


/**
 * 
 * connect to database
 * 
 */
mongoose.connect(config.atlasURI, {
    useNewUrlParser: true
})
mongoose.connection.on("connected", () => {
    console.log("[App] MongoDB connected success.")
})
mongoose.connection.on("error", err => {
    console.log(err)
    console.log("[App] MongoDB connected fail.")
})


/**
 * 
 * apply middlewares
 * 
 */

app.use(error())
app.use(logger())

app.use(static(
    path.join(__dirname, config.staticPath)
))
app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 400 * 1024 * 1024
    }
}))

app.use(cors())
app.use(routers())

app.use(ctx => {
    ctx.status = 404
})




/**
 * 
 * start service
 * 
 */
app.listen(config.port)

console.log()
console.log(`[App] server running on port: ${config.port}`)
console.log()