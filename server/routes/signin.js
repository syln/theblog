const express = require('express')
const mongoose = require('mongoose');
const sha1 = require('sha1')
const router = express.Router();
const checkNotLogin = require('../middlewares/checkLogin').checkNotLogin;
const db = require('../db/index');

let User = db.User;

// 登录
router.post('/', function (req, res) {
    let nameOrEmail = req.body.user;
    let password = req.body.password;

    let stringReg = new RegExp(nameOrEmail, 'i');

    // 先查询用户名或邮箱
    User.findOne({
        $or: [{
                name: {
                    $regex: stringReg
                }
            },
            {
                email: {
                    $regex: stringReg
                }
            }
        ]
    }, function (err, doc) {
        if (err) {
            res.send({
                httpCode: 200,
                success: false,
                msg: err.message
            })
            return;
        } else if (!doc) {
            req.session.error = '用户不存在';
            res.send({
                httpCode: 200,
                success: false,
                msg: '用户名不存在或密码错误'
            })
        } else {
            if (sha1(password) !== doc.password) {
                req.session.error = "密码错误";
                res.send({
                    httpCode: 200,
                    success: false,
                    msg: '用户名或密码错误'
                })
            } else {
                console.log(doc)
                delete doc.password;
                req.session.user = doc;
                res.send({
                    httpCode: 200,
                    success: true,
                    msg: '登录成功'
                })
            }
        }
    })
})

module.exports = router;