module.exports.preMiddleware = function () {
    this.update({
        updated: Date.now()
    })
}