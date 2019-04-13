const atlasUser = {
    username: 'dbuser',
    password: 'user123'
}

module.exports = {
    port: 3002,
    staticPath: './static',
    atlasURI: `mongodb+srv://${atlasUser.username}:${atlasUser.password}@webapiass-2b8tg.mongodb.net/mydb?retryWrites=true`
}