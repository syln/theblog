import request from '../plugins/axios';

const base = '';

// 注册
export const register = param => {
  return request.post(`${base}/register`, param)
}
