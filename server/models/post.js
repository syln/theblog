const mongoose = require('mongoose');
const moment = require('moment');

let id = mongoose.Types.ObjectId;
const post = {
    content: {
        type: String,
        required: true
    },
    comments: {
        type: Number,
        default: 0
    },
    _id: {
        type: String,
        default: id,
    },
    likes: {
        type: Number,
        default: 0
    },
    creator: {
        type: String
    },
    createTime: {
        type: Date,
        default: moment().local()
    },
    updateTime: {
        type: Date,
        default: moment().local()
    }
}
module.exports = post;