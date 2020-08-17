import { action, observable } from 'mobx';
import { showUser, showIdentity, showAuthorityRelation, showViewAuthority, setIdentityView } from '../../../api/index'

export default class ViewTeacherStore {
  @observable
  data: any[] = [
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
  ]; //table 数据
  @observable
  columns: any[] = [
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    //     {
    //       title: 'Action',
    //       key: 'action',
    //       render: (text: any, record: any) => (
    //         <Space size= "middle" >
    //         <a>Invite { record.name } < /a>
    //     < /Space>
    //       ),
    // },
  ]; // table 参数规则

  @action //  展示用户数据
  async showUserAction() {
    const result: any = await showUser();
    if (result.data.code === 1) {
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
      this.data = result.data.data;
      console.log('showUserAction ok')
    } else {
      console.log('showUserAction error')
    }
  }

}

