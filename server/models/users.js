const mongoose = require('mongoose');
const moment = require('moment');

let id = mongoose.Types.ObjectId;

const user = {
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    createTime: {
        type: Date,
        default: moment().local()
    },
    updateTime: {
        type: Date,
        default: moment().local()
    },
    userId: {
        type: String,
        default: id
    }
}
module.exports = user;