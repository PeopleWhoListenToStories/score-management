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
    
  }
})

export default instance