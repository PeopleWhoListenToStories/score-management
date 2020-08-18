import React, { useEffect } from 'react'
import { useObserver } from 'mobx-react-lite';
import AddCss from './addTeacher.module.css';

import AddList from '../../../components/AddList/AddList';
import userStore from '../../../context/useStore'

export default function AddTeacher() {

  const { AddUserStore } = userStore();

  // const [showIdentityList, setIdentityList] = useState<any[]>([]);

  useEffect(() => {
    AddUserStore.showUserAction();
    AddUserStore.showIdentityAction();
    AddUserStore.showViewAuthorityAction();
    AddUserStore.showAuthorityRelationAction();
  })

  // 添加身份
  const addIdentityList = [
    {
      list: [
        { type: '1', placeholder: "请输入身份名称", name: "addIdentityName" }
      ]
    }
  ]

  //添加api接口
  const addApiAuthority = [
    {
      list: [
        { type: '1', placeholder: "请输入api接口权限名称", name: "addApiName" },
        { type: '1', placeholder: "请输入api接口权限url", name: "addApiUrl" },
        { type: '1', placeholder: "请输入api接口权限方法", name: "addApiMethod" }
      ]
    }
  ]

  const ShowIdentityList1 = [
    {
      list: [
        { type: '1', placeholder: "请输入用户名", name: "addUserInput" },
        { type: '1', placeholder: "请输入密码", name: "addUserPwdInput" },
        { type: '2', placeholder: "请选择身份id", name: 'selectIdentity1', list: Array.from(AddUserStore.IdentityList.map((item: any) => { return { id: item.user_id, text: item.identity_text, name: item.user_name, pwd: item.user_pwd } })) }
      ]
    },
    {
      list: [
        { type: '2', placeholder: "请选择身份id", name: 'selectIdentity0', list: Array.from(AddUserStore.UserList.map((item: any) => { return { id: item.identity_id, text: item.identity_text } })) },
        { type: '1', placeholder: "请输入用户名", name: "upDateUserInput" },
        { type: '1', placeholder: "请输入密码", name: "upDateUserPwdInput" },
        { type: '2', placeholder: "请选择身份id", name: 'selectIdentity0', list: Array.from(AddUserStore.IdentityList.map((item: any) => { return { id: item.identity_id, text: item.identity_text } })) }
      ]
    }
  ]

  const ShowIdentityList2 = [
    {
      list: [
        { type: '2', placeholder: "选择已有的试图", name: "selectHasViewAuthority", list: Array.from(AddUserStore.ViewAuthorityList.map((item: any) => { return { id: item.view_authority_id, text: item.view_authority_text, view_id: item.view_id } })) }
      ]
    }
  ]

  const ShowIdentityList3 = [
    {
      list: [
        { type: '2', placeholder: "请选择身份id", name: 'selectIdentity3', list: Array.from(AddUserStore.IdentityList.map((item: any) => { return { id: item.identity_id, text: item.identity_text } })) },
        { type: '2', placeholder: "请选择api接口权限", name: "selectAuthorityRelation", list: Array.from(AddUserStore.AuthorityRelationList.map((item: any) => { return { id: item.identity_api_authority_relation_id, text: item.api_authority_text, url: item.api_authority_url, id_text: item.identity_text, method: item.api_authority_method, view_id: item.view_id } })) }
      ]
    }
  ]

  const ShowIdentityList4 = [
    {
      list: [
        { type: '2', placeholder: "请选择身份id", name: 'selectIdentity4', list: Array.from(AddUserStore.IdentityList.map((item: any) => { return { id: item.identity_id, text: item.identity_text } })) },
        { type: '2', placeholder: "请选择视图权限id", name: "selectViewAuthorityID", list: Array.from(AddUserStore.ViewAuthorityList.map((item: any) => { return { id: item.view_authority_id, text: item.view_authority_text, view_id: item.view_id } })) }
      ]
    }
  ]

  return useObserver(() => (
    <div className={AddCss.addTeacher}>

      <div className={AddCss.item}>
        <AddList navList={[{ title: "添加用户" }, { title: "修改用户" }]} list={ShowIdentityList1} />
      </div>

      <div className={AddCss.item}>
        <AddList navList={[{ title: "添加身份" }]} list={addIdentityList} />
      </div>

      <div className={AddCss.item}>
        <AddList navList={[{ title: "添加api接口权限" }]} list={addApiAuthority} />
      </div>

      <div className={AddCss.item}>
        <AddList navList={[{ title: "添加视图接口权限" }]} list={ShowIdentityList2} />
      </div>

      <div className={AddCss.item}>
        <AddList navList={[{ title: "给身份设置api接口权限" }]} list={ShowIdentityList3} />
      </div>

      <div className={AddCss.item}>
        <AddList navList={[{ title: "给身份设置视图权限" }]} list={ShowIdentityList4} />
      </div>

    </div>)
  )
}
