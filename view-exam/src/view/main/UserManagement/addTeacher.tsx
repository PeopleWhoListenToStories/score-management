import React, { useEffect } from 'react'
import { useObserver } from 'mobx-react-lite';
import AddCss from './addTeacher.module.css';

import AddList from '../../../components/AddList/AddList';
import userStore from '../../../context/useStore'

export default function AddTeacher() {

  const { AddUserStore } = userStore();

  useEffect(()=>{
    AddUserStore.showIdentityAction();
    console.log(AddUserStore.IdentityList,"111111111")
  },[])

  return useObserver(() => (
    <div className={AddCss.addTeacher}>
      <div className={AddCss.item}>
        <AddList title="添加用户" list={[{ type: '1', placeholder: "请输入用户名" }, { type: '1', placeholder: "请输入密码" }, { type: '2', placeholder: "请选择身份id", name: 'one', list: ['参数一', '参数二'] }]} />
      </div>

      <div className={AddCss.item}>
        <AddList title="添加身份" list={[{ type: '1', placeholder: "请输入身份名称" }]} />
      </div>

      <div className={AddCss.item}>
        <AddList title="添加api接口权限" list={[{ type: '1', placeholder: "请输入api接口权限名称" }, { type: '1', placeholder: "请输入api接口权限url" }, { type: '1', placeholder: "请输入api接口权限方法" }]} />
      </div>

      <div className={AddCss.item}>
        <AddList title="添加视图接口权限" list={[{ type: '2', placeholder: "选择已有的试图", list: ['参数一', '参数二'] }]} />
      </div>

      <div className={AddCss.item}>
        <AddList title="给身份设置api接口权限" list={[{ type: '2', placeholder: "请选择身份id", list: ['参数一', '参数二'] }, { type: '2', placeholder: "请选择api接口权限", list: ['参数一', '参数二'] }]} />
      </div>

      <div className={AddCss.item}>
        <AddList title="给身份设置视图权限" list={[{ type: '2', placeholder: "请选择身份id", list: ['参数一', '参数二'] }, { type: '2', placeholder: "请选择视图权限id", list: ['参数一', '参数二'] }]} />
      </div>
    </div>)
  )
}
