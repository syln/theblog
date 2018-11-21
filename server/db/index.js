const express = require('express');
const mongoose = require('mongoose');
const config = require('../config/config')
const Schema = mongoose.Schema;
const models = require('../models/index');


mongoose.Promise = require('bluebird'); // 让mongoose支持promise

// 连接数据库
mongoose.connect(config.mongodb, {
    useNewUrlParser: true
});

mongoose.connection.on('connected', function () {
    console.log('connected successed' + config.mongodb)
})

mongoose.connection.on('error', err => {
    process.exit(1);
});

// 用户documents
let _User = new Schema(models.user, {
    versionKey: false,
    timestamps: {
        createdAt: 'createTime',
        updatedAt: 'updateTime'
    },
});

// posts
let _Post = new Schema(models.post, {
    versionKey: false,
    timestamps: {
        createdAt: 'createTime',
        updatedAt: 'updateTime'
    },
});

let User = mongoose.model('User', _User, 'users')
let Post = mongoose.model('Post', _Post, 'posts')

module.exports = {
    User,
    Post
}