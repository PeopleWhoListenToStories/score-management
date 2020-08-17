import { action, observable } from 'mobx';
import { showIdentity } from '../../../api/index'

class AddUser {
  @observable
  IdentityList: any[] = []

  @action  //登录方法
  async showIdentityAction() {
    const result: any = await showIdentity();
    if (result.data.code === 1) {
      this.IdentityList = result.data.data;
    }
  }
}

export default {
  AddUser: new AddUser()
}
