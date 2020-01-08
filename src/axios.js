import axios from 'axios';
import { Message } from 'element-ui';

// alert(localStorage.getItem('token'))
export let instance = axios.create({
  baseURL: 'http://noss.fothing.com',
  timeout: 5000,
  headers: {
  }
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // if (response.data.code != '0') {
  //   return Promise.reject(response)
  // }
  return response.data;
  // return Promise.reject(response.data);
}, function (error) {
  // 对响应错误做点什么
  Message({
    type: 'error',
    message: error.response.data.message
  })
  return Promise.reject(error);
});

export const _GET = (url, params) => {
  return instance.request({
    url: url,
    method: 'get',
    params
  })
}

export const _POST = (url, data, params) => {
  return instance.request({
    url: url,
    method: 'post',
    data: data,
    params
  })
}

export default {
  _GET,
  _POST
}