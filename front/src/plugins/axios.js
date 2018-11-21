import {
  message
} from 'ant-design-vue';
import axios from "axios";
import qs from "qs";

let baseUrl;

if (process.env.NODE_ENV == "development") {
  if (process.browser) {
    baseUrl = "http://localhost:8000"
  }
} else {
  if (process.browser) {
    baseUrl = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port;
  }
}


const request = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  responseType: "json",
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    'Accept': 'application/json'
  }
})

// POST传参序列化
request.interceptors.request.use((config) => {
  /* if (config.method === 'post') {
    config.data = qs.stringify(config.data)
    console.log(config.data)
  } */
  return config
}, (error) => {
  return Promise.reject(error)
})

// 返回状态判断
request.interceptors.response.use(res => {
    if (res.data && res.status !== 200) {
      message.error(res.data.msg ?
        res.data.msg :
        res.data.error.msg)
      return Promise.reject(res.data.msg);
    }

    if (res.data && res.data.httpCode !== 200) {
      message.error(res.data.msg ?
        res.data.msg :
        res.data.error.msg)
      return Promise.reject(res.data.msg);
    }

    return res.data;

  },
  error => {
    return Promise.reject(error)
  })


/* export default {
  install: function (Vue, Option) {
    Object.defineProperty(Vue.prototype, "$http", {
      value: request
    });
  }
}; */

export default request;
