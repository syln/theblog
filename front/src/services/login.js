import request from '../plugins/axios';

const base = '';

// 检查登录
export const checkLogin = param => {
  return request.post(`${base}/auth/checkLogin`, param)
}


// 登录
export const signin = param => {
  return request.post(`${base}/signin/`, param)
}


// 查询用户信息
export const queryUser = param => {
  return request.post(`${base}/auth/queryUser`, param)
}

// 登出
export const signout = param => {
  return request.post(`${base}/auth/signout/`, param)
}
