module.exports = {
    checkLogin: function (req, res, next) { // 验证登录
        if (req.session.user) {
            let obj = {
                httpCode: 200,
                isLogin: true,
                success: true,
            };
            return res.send(obj);
        }
        next()
    },
    checkNotLogin: function (req, res, next) { // 验证未登录
        if (!req.session.user) {
            let obj = {
                httpCode: 200,
                isLogin: false,
                success: false
            };
            return res.send(obj);
        }
        next()
    }
}