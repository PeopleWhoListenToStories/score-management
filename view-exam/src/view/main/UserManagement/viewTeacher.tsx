import React, { useEffect } from 'react'
import { Radio, Table, Tag, Space } from 'antd';
import ViewTeacherCss from './viewTeacher.module.css';
import useStore from '../../../context/useStore'
import { useObserver } from 'mobx-react-lite'

let one: any = [];
let two: any = [];
let three: any = [];
const list = [
  {
    id: '1',
    type: '用户数据'
  }, {
    id: '2',
    type: '身份数据'
  }, {
    id: '3',
    type: 'api接口权限'
  }, {
    id: '4',
    type: '身份和api接口关系'
  }, {
    id: '5',
    type: '试图接口权限'
  }, {
    id: '6',
    type: '身份和试图权限关系'
  }
]

 



export default function ViewTeacher() {
  const { AddUserStore } = useStore();

  useEffect(() => {
    AddUserStore.showUserAction();
    AddUserStore.showIdentityAction();
    AddUserStore.showViewAuthorityAction();
    AddUserStore.showAuthorityRelationAction();
    AddUserStore.showApiAuthorityAction();
    console.log(AddUserStore, 'AddUserStore')
     
  })

  return useObserver(() => (
    <div className={ViewTeacherCss.ViewTeacher}>
      <div>
        <Radio.Group onChange={AddUserStore.onChange} defaultValue={0}>
          {
            list && list.map((item: any, index: number) => {
              return <Radio.Button value={index}>{item.type}</Radio.Button>
            })
          }
        </Radio.Group>
      </div>
      <h2>{list[AddUserStore.checkedIndex].type}</h2>
      <Table columns={AddUserStore.columns} dataSource={AddUserStore.data} rowKey={record => record.key} />
    </div>)
  )
}




