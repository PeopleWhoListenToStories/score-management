import { action, observable } from 'mobx';
import { message } from 'antd';
import {
  showUser,
  showIdentity,
  showAuthorityRelation,
  showViewAuthority,
  setIdentityView,
  showApiAuthority,
  showIdentityViewAuthorityRelation,
  addIdentity,
  addAuthorityApi,
  addAuthorityView,
  setIdentityApi,
  addUser,
  renewalUser
} from '../../../api/index'

export default class AddUser {
  [key: string]: any
  @observable
  UserList: any[] = []; // 展示用户数据
  @observable
  ApiAuthorityList: any[] = []; //  展示接口权限数据
  @observable
  IdentityList: any[] = [];  // 选择身份数据
  @observable
  ViewAuthorityList: any[] = []; // 获取视图权限数据
  @observable
  AuthorityRelationList: any[] = []; // 展示身份权限数据
  @observable
  IdentityViewAuthorityRelationList: any[] = []; // 身份和视图权限关系

  @action //  展示用户数据
  async showUserAction() {
      const result: any = await showUser();
      if (result.data.code === 0) return message.warn(result.data.msg);
      if (result.data.code === 1) {
        this.UserList = result.data.data;
        console.log('showUserAction ok')
      } else {
        console.log('showUserAction error')
      }
  }

  @action  // 获取身份数据
  async showIdentityAction() {
    const result: any = await showIdentity();
    if (result.data.code === 0) return message.warn(result.data.msg);
    if (result.data.code === 1) {
      this.IdentityList = result.data.data;
      console.log('showIdentityAction ok')
    } else {
      console.log('showIdentityAction error')
    }
  }

  @action  // 获取视图权限数据
  async showViewAuthorityAction() {
    const result: any = await showViewAuthority();
    if (result.data.code === 0) return message.warn(result.data.msg);
    if (result.data.code === 1) {
      this.ViewAuthorityList = result.data.data;
      console.log('showViewAuthorityAction ok')
    } else {
      console.log('showViewAuthorityAction error')
    }
  }

  @action  // 展示身份权限数据
  async showAuthorityRelationAction() {
    this.showIdentityAction();
    const result: any = await showAuthorityRelation();
    if (result.data.code === 0) return message.warn(result.data.msg);
    if (result.data.code === 1) {
      this.AuthorityRelationList = result.data.data;
      console.log('showAuthorityRelation ok')
    } else {
      console.log('showAuthorityRelation error')
    }
  }

  @action // 展示身份和视图权限关系
  async showIdentityViewAuthorityRelationAction() {
    const result: any = await showIdentityViewAuthorityRelation();
    if (result.data.code === 0) return message.warn(result.data.msg);
    if (result.data.code === 1) {
      this.IdentityViewAuthorityRelationList = result.data.data;
    }
  }

  @action  // 给身份设定视图权限
  async setIdentityViewAction(identity_id: string, view_authority_id: string) {
    const result: any = await setIdentityView(identity_id, view_authority_id);
    if (result.data.code === 0) return message.warn(result.data.msg);
    if (result.data.code === 1) {
      message.success(result.data.msg);
    } else {
      message.warn(result.data.msg);
    }
  }

  @action // 给身份设定api接口权限
  async setIdentityApiAction(identity_id: string, api_authority_id: string) {
    const result: any = await setIdentityApi(identity_id, api_authority_id);
    if (result.data.code === 0) return message.warn(result.data.msg);
    if (result.data.code === 1) {
      message.success(result.data.msg);
    } else {
      message.warn(result.data.msg);
    }
  }

  @action // 展示api接口权限数据
  async showApiAuthorityAction() {
    const result: any = await showApiAuthority();
    if (result.data.code === 1) {
      this.ApiAuthorityList = result.data.data;
      console.log('showApiAuthorityAction ok')
    } else {
      console.log('showApiAuthorityAction error')
    }
  }

  @action // 添加身份
  async addIdentityAction(identity_text: string) {
    const result: any = await addIdentity(identity_text);
    if (result.data.code === 1) {
      message.success(result.data.msg);
    } else {
      message.warn(result.data.msg);
    }
  }

  @action  // 添加api接口权限
  async addAuthorityApiAction(api_authority_text: string, api_authority_url: string, api_authority_method: string) {
    const result: any = await addAuthorityApi(api_authority_text, api_authority_url, api_authority_method);
    if (result.data.code === 1) {
      message.success(result.data.msg);
    } else {
      message.warn(result.data.msg);
    }
  }

  @action // 添加身份和视图
  async addAuthorityViewAction(view_authority_text: string, view_id: string) {
    const result: any = await addAuthorityView(view_authority_text, view_id);
    if (result.data.code === 1) {
      message.success(result.data.msg);
    } else {
      message.warn(result.data.msg);
    }
  }

  @action // 添加用户
  async addUserAction(user_name: string, user_pwd: string, identity_id: string, avatar: string) {
    const result: any = await addUser(user_name, user_pwd, identity_id, avatar);
    if (result.data.code === 1) {
      message.success(result.data.msg)
    } else {
      message.success(result.data.msg)
    }
  }

  @action // 更新用户
  async renewalUserAction(user_id: string, user_name: string, user_pwd: string, identity_id: string, avatar: string) {
    console.log(user_id, user_name, user_pwd, identity_id, avatar)
    const result: any = await renewalUser(user_id, user_name, user_pwd, identity_id);
    if (result.data.code === 1) {
      message.success(result.data.msg)
    } else {
      message.warn(result.data.msg)
    }
  }


}

