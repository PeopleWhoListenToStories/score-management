import axios from 'axios';

const instance = axios.create({
  timeout: 3000,
  baseURL:'http://127.0.0.1:7002'
})

instance.interceptors.request.use((request: any) => {
 request.headers['authorization'] = window.sessionStorage.getItem('token') ? window.sessionStorage.getItem('token') : '';
  return request;
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use((response: any) => {
  return response;
}, error => {
  const code: number | undefined = error.response.status;
  switch (code) {
    case 401:
      console.warn('您还没有权限');
      break;
    case 404:
      console.log('404 找不到');
      break;
    case 500:
      console.log('500')
      break;
  } 
})

export default instance