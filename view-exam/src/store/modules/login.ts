import { action, observable } from 'mobx';
import { loginApi , getRandomCode } from '../../api/index'

export default class Login {
  
  @observable
  RandomCode:string = ""; //验证码

  @action  //登录方法
  async loginAction(user_name: string, user_pwd: string) {
    const result: any = await loginApi(user_name, user_pwd);
    if(result.data.code === 1){
      window.sessionStorage.setItem('token',result.data.token);
    }else{
      window.sessionStorage.clearItem('token');
    }
    return result.data;
  }

  async initRandomCode(){
    const result:any = await getRandomCode();
    if(result.data.code ===1){
      this.RandomCode = result.data.randomNum;
    }
  }
}
 