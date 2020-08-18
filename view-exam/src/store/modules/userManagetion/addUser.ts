import { action, observable } from 'mobx';
import { showUser, showIdentity, showAuthorityRelation, showViewAuthority, setIdentityView, showApiAuthority } from '../../../api/index'

export default class AddUser {
  @observable
  UserList: any[] = []; // 展示用户数据
  @observable
  ApiAuthorityList: any[] = []; //  展示接口权限数据
  @observable
  IdentityList: any[] = [];  // 选择身份数据
  @observable
  ViewAuthorityList: any[] = []; // 获取视图权限数据
  @observable
  AuthorityRelationList: any[] = []; // //展示身份权限数据
  @observable
  checkedIndex: number = 0; //默认选中的下标
  @observable
  data: any[] = [//table 数据
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    }
  ];
  @observable
  columns: any[] = [// table 参数规则
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }
    //     {
    //       title: 'Action',
    //       key: 'action',
    //       render: (text: any, record: any) => (
    //         <Space size= "middle" >
    //         <a>Invite { record.name } < /a>
    //     < /Space>
    //       ),
    // },
  ];

  @action //  展示用户数据
  async showUserAction() {
    const result: any = await showUser();
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
    if (result.data.code === 1) {
      this.ViewAuthorityList = result.data.data;
      console.log('showViewAuthorityAction ok')
    } else {
      console.log('showViewAuthorityAction error')
    }
  }

  @action  // 展示身份权限数据
  async showAuthorityRelationAction() {
    const result: any = await showAuthorityRelation(2);
    if (result.data.code === 1) {
      this.AuthorityRelationList = result.data.data;
      console.log('showAuthorityRelation ok')
    } else {
      console.log('showAuthorityRelation error')
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
    const result: any = await showApiAuthority();
    if (result.data.code === 1) {
      this.ApiAuthorityList = result.data.data;
      console.log('showApiAuthorityAction ok')
    } else {
      console.log('showApiAuthorityAction error')
    }
  }

  @action
  onChange = async (e: any) => {
    this.checkedIndex = e.target.value;
    switch (e.target.value) {
      case 0:
        this.columns = [
          {
            title: '用户名',
            dataIndex: 'user_name',
            key: 'user_name',
          },
          {
            title: '密码',
            dataIndex: 'user_pwd',
            key: 'user_pwd',
          },
          {
            title: '身份',
            dataIndex: 'identity_text',
            key: 'user_pwd'
          }
        ]
        this.data = this.UserList;
        break;
      case 1:
        this.columns = [
          {
            title: '身份名称',
            dataIndex: 'identity_text'
          },
          {
            title:'身份id',
            dataIndex:'identity_id'
          }
        ]
        this.data = this.IdentityList
        break;
      case 2:
        this.columns = [
          {
            title: 'api权限名称',
            dataIndex: 'api_authority_text',
            key: "identity_api_authority_relation_id"
          },
          {
            title: 'api权限url',
            dataIndex: 'api_authority_url',
            key: "identity_api_authority_relation_id"
          },
          {
            title: 'api权限方法',
            dataIndex: 'api_authority_method',
            key: "identity_api_authority_relation_id"
          }
        ]
        this.data = this.AuthorityRelationList;
        break;
      case 3:
        this.columns = [
          {
            title: '身份名称',
            dataIndex: 'identity_text',
            key: "identity_api_authority_relation_id"
          },
          {
            title: 'api权限名称',
            dataIndex: 'api_authority_text',
            key: "identity_api_authority_relation_id"
          },
          {
            title: 'api权限url',
            dataIndex: 'api_authority_url',
            key: "identity_api_authority_relation_id"
          },
          {
            title: 'api权限方法',
            dataIndex: 'api_authority_method',
            key: "identity_api_authority_relation_id"
          }
        ]
        this.data = this.AuthorityRelationList;
        break;
      case 4:
        this.columns = [
          {
            title: '视图权限名称',
            dataIndex: 'view_authority_text',
            key: 'view_authority_id'
          },
          {
            title: '视图id',
            dataIndex: 'view_id',
            key: 'view_authority_id'
          }
        ]
        this.data = this.ViewAuthorityList
        break;
      case 5:
        this.columns = [
          {
            title: '身份',
            dataIndex: ''
          },
          {
            title: '视图名称',
            dataIndex: 'view_authority_text',
            key: 'view_authority_id'
          },
          {
            title: '视图id',
            dataIndex: 'view_id',
            key: 'view_authority_id'
          }
        ]
        this.data =  this.ViewAuthorityList
        break;
      default:
        return undefined;
    }
  }
}

