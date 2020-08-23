import { action, observable } from 'mobx';
import { loginApi, getRandomCode } from '../../api/index'
import { setCookie } from '../../utils/myCookie'

export default class Login {

  @observable
  RandomCode: string = ""; //验证码

  @observable
  isRemember: boolean = false; // 是否记住密码

  @action  //登录方法
   loginAction = async (user_name: string, user_pwd: string) => {
    const result: any = await loginApi(user_name, user_pwd);
    if (result.data.code === 1) {
      // window.sessionStorage.setItem('token',result.data.token);
      setCookie('token', result.data.token);//设置权限token字段
    } else {
      // window.sessionStorage.clearItem('token');
    }
    return result.data;
  }

  async initRandomCode() {
    const result: any = await getRandomCode();
    if (result.data.code === 1) {
      this.RandomCode = result.data.randomNum;
    }
  }

  // 触发记住密码选中框
  changePwd(val: boolean) {
    this.isRemember = val;
  }
}
