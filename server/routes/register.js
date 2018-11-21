const express = require('express')
const mongoose = require('mongoose');
const sha1 = require('sha1')
const router = express.Router();
const db = require('../db/index')
require("moment/locale/zh-cn");
const moment = require('moment');
moment.locale("zh-cn");

let User = db.User;

router.post('/', function (req, res) {

    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let confirmPassword = req.body.confirmPassword;

    password = sha1(password);

    let user = {
        name,
        email,
        password: password,
        confirmPassword,
        createTime: moment().local(),
        updateTime: moment().local()
    }

    // 用户新增
    User.create(user).then((result) => {

        let user1 = result;
        // 删除密码这种敏感信息，将用户信息存入 session
        delete user1.password;

        req.session.user = user1;

        // 用户新增成功
        res.send({
            httpCode: 200,
            data: null,
            success: true,
            msg: '注册成功'
        })

    }).catch(e => {
        // 用户新增时用户名或邮箱重复
        if (e.message.match('duplicate key')) {
            if (e.message.match('name')) {
                let obj = {
                    httpCode: 200,
                    msg: '用户名已存在',
                    data: null,
                    success: false
                };
                res.send(obj);
            } else if (e.message.match('email')) {
                let obj = {
                    httpCode: 200,
                    msg: '邮箱已存在',
                    data: null,
                    success: false
                };
                res.send(obj);
            } else {
                res.send(e.message)
            }
        }
    })

});

module.exports = router;