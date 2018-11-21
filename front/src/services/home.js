import request from '../plugins/axios';

const base = '';

// 发布帖子
export const addPost = param => {
  return request.post(`${base}/post/add`, param)
}


// 查询帖子
export const queryPost = param => {
  return request.post(`${base}/post/query`, param)
}


// 删除帖子
export const deletePost = param => {
  return request.post(`${base}/post/delete`, param)
}
