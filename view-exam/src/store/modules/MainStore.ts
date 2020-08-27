import { action, observable } from 'mobx';
import { getUserInfo } from '../../api/index';
import { setCookie } from '../../utils/myCookie';

interface Item {
  identity_text: string,
  user_id: string,
  user_name: string,
  view_authority_text: string,
  view_id: string,
}

export default class MainStore {
  @observable
  user_info:any = {}; //用户的id
  @observable
  MenuList: Item[] = []; // 菜单列表
  @observable
  ViewAuthority: any[] = []; // 有权限视图列表
  @observable
  NoViewAuthority: any[] = []; // 没有权限视图列表
  @observable
  TagList: Array<{ name: string, path: string }> = []; // 标签列表
  @observable
  AfterSaleVisable:boolean = false;
  
  isGetInitFlag: boolean = true; // 获取个人信息开关

  @action  // 获取列表数据方法
  async initAction() {
    if (this.isGetInitFlag) {
      const result: any = await getUserInfo();
      if (result.data.code === 1) {
        this.user_info =   result.data.data;
        setCookie('user_id', result.data.data.user_id)
        setCookie('identity_id', result.data.data.identity_id); //设置权限id字段
        // await this.getMenuListAction(result.data.data.user_id)
        this.isGetInitFlag = false;
        console.log(this.MenuList)
      }
    }
  }

  @action changeAfterSaleVisable(val:boolean){
    this.AfterSaleVisable = val;
  }

  @action
  async TagAction(obj: { path: string, name: string }) {
    const isHas = this.TagList.find(v => v.path === obj.path);
    if (!isHas) {
      this.TagList.push(obj)
    }
  }

  @action
  async removePathAction(path: string) {
    const index = this.TagList.findIndex(v => v.path === path);
    this.TagList.splice(index, 1);
  }
  //@action // 获取用户的视图权限数据
  // async getMenuListAction(user_id: string) {
  //   const result = await getMenuList(user_id);
  //   const ViewAuthority: any[] = []; //有权限视图列表
  //   let NoViewAuthority: any[] = []; //没 有权限视图列表
  //   if (result.data.code === 1) {
  //     menu.forEach(item => {
  //       let children = item.children.filter(value => result.data.data.findIndex((data: any) => data.view_authority_text === value.meta.title) !== -1);
  //       let NoChildren = item.children.filter(value => result.data.data.findIndex((data: any) => data.view_authority_text === value.meta.title) === -1);
  //       // 有权限
  //       if (children.length) {
  //         ViewAuthority.push({ ...item, children });
  //       }
  //       //没权限
  //       NoViewAuthority = [...NoViewAuthority, ...NoChildren];
  //       this.ViewAuthority = ViewAuthority;
  //       this.NoViewAuthority = NoViewAuthority;
  //     })
  //   }
  // }
}