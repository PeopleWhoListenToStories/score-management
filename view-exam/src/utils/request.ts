import axios from 'axios';
import { getCookie } from "../utils/myCookie"
// import NProgress from 'nprogress';

const instance = axios.create({
  timeout: 3000,
  baseURL: 'http://127.0.0.1:7002'
})

instance.interceptors.request.use((request: any) => {
  // request.headers['authorization'] = window.sessionStorage.getItem('token') ? window.sessionStorage.getItem('token') : '';
  request.headers['authorization'] =  getCookie('token') ? getCookie('token') : '' ;
  return request;
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use((response: any) => {
  // NProgress.done();
  return response;
}, error => {
  if(error && error.response){
    const code: number | undefined = error.response.status;
    switch (code) {
      case 401:
        window.location.replace('#/Login');
        return Promise.reject('401 权限不够');
      case 404:
        window.location.pathname = '#/NoFound';
        return Promise.reject('404 找不到页面');
      case 500:
        window.location.pathname = `${encodeURI('#')}/NoServer`;
        return Promise.reject('500 服务器崩溃了');
      default:
        // window.location.pathname = '/NoServer';
        return Promise.reject('其他错误');
    }
  }
})

export default instance