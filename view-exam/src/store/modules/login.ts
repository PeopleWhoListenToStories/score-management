import { action, observable } from 'mobx';
import { loginApi } from '../../api/index'

class Login {
  @action  //登录方法
  async loginAction(user_name: string, user_pwd: string) {
    const result: any = await loginApi(user_name, user_pwd);
    console.log(result)
    if(result.data.code === 1){
      window.sessionStorage.setItem('token',result.data.token);
    }else{
      window.sessionStorage.clearItem('token');
    }
    return result.data;
  }
}

export default {
  Login: new Login()
}
