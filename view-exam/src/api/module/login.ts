import ajax from '../../utils/request';

// 测试接口
export const test = () => ajax.get('/api/test');

<<<<<<< HEAD
=======
//登录接口
export const loginApi = (user_name:string,user_pwd:string) => ajax.post('/user/login',{user_name,user_pwd});
<<<<<<< HEAD
>>>>>>> e8058cacbee8a90b2bba7579bd043b6b7cf48911
=======

//试题分类接口
export const testType=()=>ajax.get('/exam/insertQuestionsType')
>>>>>>> b7ace36314e4a2fd46d778a1f8a6fb99185822fd
