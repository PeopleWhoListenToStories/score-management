import axios from 'axios';

const instance = axios.create({
  timeout: 3000
})

instance.interceptors.request.use((request: any) => {
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