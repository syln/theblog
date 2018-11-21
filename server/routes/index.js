module.exports = (app) => {
    app.use('/register', require('./register')); // 注册
    app.use('/signin', require('./signin')); // 登录
    app.use('/auth', require('./auth')) // 检查相关权限
    app.use('/post', require('./post')) // 发布相关
}