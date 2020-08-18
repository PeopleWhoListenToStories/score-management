import React, { useEffect, useState } from 'react'
import { Radio, Table } from 'antd';
import ViewTeacherCss from './viewTeacher.module.css';
import useStore from '../../../context/useStore'
import { useObserver } from 'mobx-react-lite'

const list = [
  {
    id: '1',
    type: '用户数据',
    action: 'showUserAction',
    list: 'UserList',
    columns: [
      {
        title: '用户名',
        dataIndex: 'user_name',
        key: 'user_id',
      },
      {
        title: '密码',
        dataIndex: 'user_pwd',
        key: 'user_id',
      },
      {
        title: '身份',
        dataIndex: 'identity_text',
        key: 'user_id'
      }
    ]
  }, {
    id: '2',
    type: '身份数据',
    action: 'showIdentityAction',
    list: 'IdentityList',
    columns: [
      {
        title: '身份名称',
        dataIndex: 'identity_text'
      },
      {
        title: '身份id',
        dataIndex: 'identity_id'
      }
    ]
  }, {
    id: '3',
    type: 'api接口权限',
    action: 'showAuthorityRelationAction',
    list: 'AuthorityRelationList',
    columns: [
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
  }, {
    id: '4',
    type: '身份和api接口关系',
    action: 'showAuthorityRelationAction',
    list:'AuthorityRelationList',
    colums: [
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
  }, {
    id: '5',
    type: '视图接口权限',
    action: 'showViewAuthorityAction',
    list: 'ViewAuthorityList',
    colums: [
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
    ],
  }, {
    id: '6',
    type: '身份和视图权限关系',
    action: 'showViewAuthorityAction',
    list: 'ViewAuthorityList',
    colums: [
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
  }
]

export default function ViewTeacher() {
  const { AddUserStore } = useStore();

  const [curIndex, setCurIndex] = useState<number>(0);

  useEffect(() => {
    AddUserStore[list[curIndex].action]();
  }, [curIndex])

  // 切换下标
  const onChange = (index: string) => {
    setCurIndex(Number(index));
    console.log(AddUserStore,'AddUserStore')
  }


  return useObserver(() => (

    <div className={ViewTeacherCss.ViewTeacher}>
      <div>
        <Radio.Group onChange={(e) => { onChange(e.target.value) }} defaultValue={0}>
          {
            list && list.map((item: any, index: number) => {
              return <Radio.Button value={index}>{item.type}</Radio.Button>
            })
          }
        </Radio.Group>
      </div>
      <h2>{list[curIndex].type}</h2>
      <Table columns={list[curIndex].colums} dataSource={AddUserStore[list[curIndex].list]} rowKey={(record: any) => record.key} />
    </div>)
  )
}




