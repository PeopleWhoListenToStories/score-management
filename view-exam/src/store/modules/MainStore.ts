import { action, observable } from 'mobx';
import { getUserInfo, showViewAuthority, getUserNew } from '../../api/index';
import { setCookie, getCookie } from '../../utils/myCookie';
import menu from '../../router/menu';
import { IRouerItem } from '../../utils/interface';

export default class MainStore {
  @observable
  user_info: any = {}; //用户的id
  // @observable
  ViewAuthority: any[] = []; // 有权限视图列表
  // @observable
  NoViewAuthority: any[] = []; // 没有权限视图列表
  @observable
  TagList: Array<{ name: string, path: string }> = []; // 标签列表
  @observable
  messageFlag: boolean = false;
  @observable
  routes: IRouerItem[] = [];
  @observable
  AfterSaleVisable: boolean = false; //聊天框通知开关

  isGetInitFlag: boolean = false; // 获取个人信息开关
  isGetViewAuthority: boolean = false; //用户视图权限开关

  @action  // 获取列表数据方法
  async getUserInfoAction() {
    if (this.isGetInitFlag) {
      return;
    }
    this.isGetInitFlag = true;
    const result: any = await getUserInfo();
    if (result.data.code === 1) {
      this.user_info = result.data.data;
      setCookie('user_id', result.data.data.user_id)
      setCookie('identity_id', result.data.data.identity_id); //设置权限id字段
      // await this.getMenuListAction(result.data.data.user_id)
      this.isGetInitFlag = false;
    }
  }

  // 修改聊天框显示开关
  @action changeAfterSaleVisable(val: boolean) {
    this.AfterSaleVisable = val;
  }
  // 修改头部提示消息开关
  @action changeMessageFlag(val: boolean) {
    this.messageFlag = val;
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

  @action // 获取用户的视图权限数据
  async getMenuListAction() {

    if (this.isGetViewAuthority) {
      return;
    }
    this.isGetViewAuthority = true;
    // const result = await showViewAuthority();
    const result = await getUserNew({ user_id: getCookie('user_id') });
    let ViewAuthority: any[] = []; //有权限视图列表
    let NoViewAuthority: any[] = []; //没 有权限视图列表
    if (result.data.code === 1) {
      menu.forEach((item: any) => {
        let children: any[] = [];
        item.children.forEach((value: any) => {
          if (result.data.data.some((view: any) => view.view_id === value.meta.view_id)) {
            children.push(value)
          } else {
            NoViewAuthority.push(value)
          }
        })
        if (children.length) {
          ViewAuthority.push({ ...item, children })
        }
      })
    }

    this.ViewAuthority = ViewAuthority;
    this.NoViewAuthority = NoViewAuthority;
    this.routes = this.getRouter(menu)
  }

  getRouter(menus: any) {
    if (this.ViewAuthority.length) {
      menus = this.ViewAuthority;
    }
    let routes: IRouerItem[] = [];
    menus.forEach((item: any) => {
      item.children.forEach((value: any) => value.component === value.meta.component);
      routes = routes.concat(item.children);
    })
    if (this.NoViewAuthority.length) {
      this.NoViewAuthority.forEach((item: any) => {
        routes.push({ path: (item.path as string), redirect: '/NoFound' } as any);
      })
    }
    return routes;
  }
}