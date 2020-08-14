import { action, observable } from 'mobx';
import { getUserInfo, getMenuList } from '../../api/index'

interface Item {
  identity_text: string,
  user_id: string,
  user_name: string,
  view_authority_text: string,
  view_id: string,
}

class MainStore {
  @observable
  user_id: string = ""; //用户的id
  @observable
  MenuList: Item[] = []; // 菜单列表

  @action  // 获取列表数据方法
  async initAction() {
    const result: any = await getUserInfo();
    if (result.data.code === 1) {
      this.user_id = result.data.user_id;
      await this.getMenuListAction(result.data.data.user_id)
    }
  }
  @action // 获取用户的视图权限数据
  async getMenuListAction(user_id: string) {
    const result = await getMenuList(user_id);
    if (result.data.code === 1) {
      this.MenuList = result.data.data;
    }
  }

}

export default {
  MainStore: new MainStore()
}
