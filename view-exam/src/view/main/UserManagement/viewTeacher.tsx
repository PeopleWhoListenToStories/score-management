import React, { useEffect, useState } from 'react'
import { Radio, Table, Button } from 'antd';
import ViewTeacherCss from './viewTeacher.module.css';
import useStore from '../../../context/useStore'
import { useObserver } from 'mobx-react-lite'
import XLSX from "xlsx"

import xlsx from 'xlsx'
const list = [
  {
    id: '1',
    type: '用户数据',
    action: 'showUserAction',
    list: 'UserList',
    key: 'user_id',
    colums: [
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
    key: 'identity_id',
    colums: [
      {
        title: '身份名称',
        dataIndex: 'identity_text',
      },
      {
        title: '身份id',
        dataIndex: 'identity_id',
      }
    ]
  }, {
    id: '3',
    type: 'api接口权限',
    action: 'showApiAuthorityAction',
    list: 'ApiAuthorityList',
    key: 'api_authority_id',
    colums: [
      {
        title: 'api权限名称',
        dataIndex: 'api_authority_text',
      },
      {
        title: 'api权限url',
        dataIndex: 'api_authority_url',
      },
      {
        title: 'api权限方法',
        dataIndex: 'api_authority_method',
      }
    ]
  }, {
    id: '4',
    type: '身份和api接口关系',
    action: 'showAuthorityRelationAction',
    list: 'AuthorityRelationList',
    key: 'identity_api_authority_relation_id',
    colums: [
      {
        title: '身份名称',
        dataIndex: 'identity_text',
      },
      {
        title: 'api权限名称',
        dataIndex: 'api_authority_text',
      },
      {
        title: 'api权限url',
        dataIndex: 'api_authority_url',
      },
      {
        title: 'api权限方法',
        dataIndex: 'api_authority_method',
      }
    ]
  }, {
    id: '5',
    type: '视图接口权限',
    action: 'showViewAuthorityAction',
    list: 'ViewAuthorityList',
    key: 'view_authority_id',
    colums: [
      {
        title: '视图名称',
        dataIndex: 'view_authority_text',
      },
      {
        title: '视图id',
        dataIndex: 'view_id',
      }
    ],
  }, {
    id: '6',
    type: '身份和视图权限关系',
    action: 'showIdentityViewAuthorityRelationAction',
    list: 'IdentityViewAuthorityRelationList',
    key: 'identity_view_authority_relation_id',
    colums: [
      {
        title: '身份',
        dataIndex: 'identity_text'
      },
      {
        title: '视图名称',
        dataIndex: 'view_authority_text',
      },
      {
        title: '视图id',
        dataIndex: 'view_id',
      }
    ]
  }
]

export default function ViewTeacher() {
  const { AddUserStore } = useStore();

  const [curIndex, setCurIndex] = useState<number>(0);

  useEffect(() => {
    AddUserStore[list[curIndex].action]();
  }, [AddUserStore, curIndex])

  // 切换下标
  const onChange = (index: string) => {
    setCurIndex(Number(index));
  }

  function ExectOutput() {
    (window as any)._hmt.push(['_trackEvent', "视图管理", "click", "导出execl"]);
    const ws = XLSX.utils.json_to_sheet(AddUserStore[list[curIndex].list]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, `${list[curIndex].type}`);
    XLSX.writeFile(wb, `${list[curIndex].type}.xlsx`)
    //导出方法
    const exct = () => {
      let ws = xlsx.utils.json_to_sheet(AddUserStore.UserList);
      let wb = xlsx.utils.book_new();
      xlsx.utils.book_append_sheet(wb, ws, "user");
      xlsx.writeFile(wb, 'user.xlsx')
    }
    return useObserver(() => (
      <div className={ViewTeacherCss.ViewTeacher}>
        {/* 头部tab */}
        <div>
          <button onClick={() => { exct() }}>导出文件</button>
          <Radio.Group onChange={(e) => { onChange(e.target.value) }} defaultValue={0}>
            {
              list && list.map((item: any, index: number) => {
                return <Radio.Button value={index} key={index}>{item.type}</Radio.Button>
              })
            }
          </Radio.Group>
        </div>
        {/* 提示标签 */}
        <h2>{list[curIndex].type}  <Button type="primary" >导出 </Button></h2>
        {/* 表格 */}
        <Table columns={list[curIndex].colums} dataSource={AddUserStore[list[curIndex].list]} rowKey={list[curIndex].key} />
      </div>)
    )
  }
}