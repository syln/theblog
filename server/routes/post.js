const express = require('express')
const mongoose = require('mongoose');
const sha1 = require('sha1')
const router = express.Router();
const db = require('../db/index');
require("moment/locale/zh-cn");
const moment = require('moment');
moment.locale("zh-cn");
let Post = db.Post;

// 增加post
router.post('/add', function (req, res) {
    const content = req.body.content;
    const creator = req.session.user.name;

    let obj = {
        content,
        creator,
        createTime: moment().local()
    }
    Post.create(obj).then(result => {
        res.send({
            httpCode: 200,
            success: 'true',
            msg: '发布成功'
        })
    }).catch(e => {
        res.send({
            httpCode: 200,
            success: false,
            msg: e.message
        })
    })
})

// 查询post
router.post('/query', function (req, res) {

    Post.find({}).sort({
        'createTime': -1
    }).then(docs => {
        let results = [];
        docs.map(v => {
            results.push({
                content: v.content,
                createdTime: moment(v.createTime).fromNow(),
                creator: v.creator,
                postId: v._id,
                comments: v.comments,
                likes: v.likes,
                type: 'post'
            })
        })
        res.send({
            httpCode: 200,
            success: 'true',
            list: results
        })
    }).catch(e => {
        res.send({
            httpCode: 200,
            success: false,
            msg: e.message
        })
    })
})

// 删除post
router.post('/delete', function (req, res) {
    const postId = req.body.postId;
    Post.deleteOne({
        _id: postId
    }).then(doc => {
        res.send({
            httpCode: 200,
            success: true
        })
    }).catch(e => {
        res.send({
            httpCode: 200,
            msg: e.message,
            success: false
        })
    })
})
module.exports = router;