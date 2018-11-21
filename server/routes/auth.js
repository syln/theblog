const express = require('express')
const mongoose = require('mongoose');
const sha1 = require('sha1')
const router = express.Router();
const checkNotLogin = require('../middlewares/checkLogin').checkNotLogin;
const db = require('../db/index');
require("moment/locale/zh-cn");
const moment = require('moment');
moment.locale("zh-cn");

let User = db.User;


// 验证是否登录
router.post('/checkLogin', checkNotLogin, function (req, res) {
    res.send({
        httpCode: 200,
        success: true,
        isLogin: true
    })
})

// 查询用户信息          
router.post('/queryUser', checkNotLogin, (req, res) => {
    let username = req.session.user.name;
    User.findOne({
        name: username
    }).then(result => {
        res.send({
            httpCode: 200,
            success: true,
            userInfo: {
                id: result._id,
                name: result.name,
                email: result.email,
                createTime: moment(result.createTime).format("YYYY-MM-DD hh:mm:ss")
            }
        })
    }).catch(e => {
        res.send({
            httpCode: 200,
            success: false,
            msg: e.message
        })
    })

})

// 登出
router.post('/signout', (req, res) => {
    req.session.user = null;
    console.log(req.session.user);
    res.send({
        httpCode: 200,
        success: true,
        msg: '登出成功'
    })
})

module.exports = router;