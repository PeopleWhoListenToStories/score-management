import { action, observable } from 'mobx';
import { showUser, showIdentity, showAuthorityRelation, showViewAuthority, setIdentityView, showApiAuthority, showIdentityViewAuthorityRelation } from '../../../api/index'

interface Iv1 {
  identity_id: string,
  identity_text: string,
}

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
    if (this.UserList.length === 0) {
      const result: any = await showUser();
      if (result.data.code === 1) {
        this.UserList = result.data.data;
        console.log('showUserAction ok')
      } else {
        console.log('showUserAction error')
      }
    }
  }

  @action  // 获取身份数据
  async showIdentityAction() {
    if (this.IdentityList.length === 0) {
      const result: any = await showIdentity();
      if (result.data.code === 1) {
        this.IdentityList = result.data.data;
        console.log('showIdentityAction ok')
      } else {
        console.log('showIdentityAction error')
      }
    }
  }

  @action  // 获取视图权限数据
  async showViewAuthorityAction() {
    if (this.ViewAuthorityList.length === 0) {
      const result: any = await showViewAuthority();
      if (result.data.code === 1) {
        this.ViewAuthorityList = result.data.data;
        console.log('showViewAuthorityAction ok')
      } else {
        console.log('showViewAuthorityAction error')
      }
    }
  }



  @action  // 展示身份权限数据
  async showAuthorityRelationAction() {
    if (this.AuthorityRelationList.length === 0) {
      this.showIdentityAction();
      const result: any = await showAuthorityRelation();
      if (result.data.code === 1) {
        this.AuthorityRelationList = result.data.data;
        console.log('showAuthorityRelation ok')
      } else {
        console.log('showAuthorityRelation error')
      }
    }
  }


  @action // 展示身份和视图权限关系
  async showIdentityViewAuthorityRelationAction() {
    if (this.IdentityViewAuthorityRelationList.length === 0) {
      const result: any = await showIdentityViewAuthorityRelation();
      if (result.data.code === 1) {
        this.IdentityViewAuthorityRelationList = result.data.data;
      }
    }
  }

  @action  // 给身份设定视图权限
  async setIdentityViewAction(identity_id: string, view_authority_id: string) {
    const result: any = await setIdentityView(identity_id, view_authority_id);
    if (result.data.code === 1) {
      console.log('setIdentityViewAction ok')
    } else {
      console.log('setIdentityViewAction error')
    }
  }

  @action // 展示api接口权限数据
  async showApiAuthorityAction() {
    if (this.ApiAuthorityList.length === 0) {
      const result: any = await showApiAuthority();
      if (result.data.code === 1) {
        this.ApiAuthorityList = result.data.data;
        console.log('showApiAuthorityAction ok')
      } else {
        console.log('showApiAuthorityAction error')
      }
    }
  }

}

