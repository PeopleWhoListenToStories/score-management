import ajax from '../../utils/request';

// 测试接口
export const test = () => ajax.get('/api/test');

//登录接口
export const loginApi = (user_name:string,user_pwd:string) => ajax.post('/user/login',{user_name,user_pwd});