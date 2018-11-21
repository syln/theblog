const express = require("express");
const opn = require('opn');
const router = require('./routes');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session); //将session保存到mongodb
const bodyParser = require('body-parser'); //解析body

const helmet = require('helmet');
const config = require('./config/config')

const app = express();

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: false
}));


// 通过适当地设置 HTTP 头，保护应用程序避免一些众所周知的 Web 漏洞。
app.use(helmet());


// session
app.use(session({
    name: config.session.key, // 设置 cookie 中保存 session id 的字段名称
    secret: config.session.secret, // 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
    resave: true, // 强制更新 session
    saveUninitialized: false, // 设置为 false，强制创建一个 session，即使用户未登录
    cookie: {
        maxAge: config.session.maxAge // 过期时间，过期后 cookie 中的 session id 自动删除
    },
    store: new MongoStore({ // 将 session 存储到 mongodb
        url: config.mongodb // mongodb 地址
    })
}))


router(app)

app.listen(8000);