module.exports = {
    port: 8000,
    session: {
        secret: 'jimukey',
        key: 'jimukey',
        maxAge: 25920000000
    },
    mongodb: 'mongodb://localhost:27017/blog'
}