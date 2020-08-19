import React, { useEffect, useState } from 'react'
import { useObserver } from 'mobx-react-lite';
import AddCss from './addTeacher.module.css';

import { Button, Input, Select, Divider, Tag } from 'antd'

import AddList from '../../../components/AddList/AddList';
import userStore from '../../../context/useStore'
const { Option } = Select;


const AddTeacher: React.FC = () => {
  const [addIdentityName, UseAddIdentityName] = useState<string>('');
  const [addApiName, UseAddApiName] = useState<string>('');
  const [addApiUrl, UseAddApiUrl] = useState<string>('');
  const [addApiMethod, UseAddApiMethod] = useState<string>('');
  const [selectHasViewAuthority, UseSelectHasViewAuthority] = useState<any>({});
  const [selectIdentity1, UseSelectIdentity1] = useState<any>({});
  const [selectIdentity2, UseSelectIdentity2] = useState<any>({});
  const [selectIdentity3, UseSelectIdentity3] = useState<any>({});
  const [selectIdentity4, UseSelectIdentity4] = useState<any>({});




  const { AddUserStore } = userStore();

  // const [showIdentityList, setIdentityList] = useState<any[]>([]);

  useEffect(() => {
    AddUserStore.showApiAuthorityAction();
    AddUserStore.showUserAction();
    AddUserStore.showIdentityAction();
    AddUserStore.showViewAuthorityAction();
    AddUserStore.showAuthorityRelationAction();
  })


  const updateText = (e: any) => {
    UseAddIdentityName(e.target.value)
  }

  const onOk1 = () => {
    AddUserStore.addIdentityAction(addIdentityName)
    UseAddIdentityName('')
  }

  const onOk2 = () => {
    AddUserStore.addAuthorityApiAction(addApiName, addApiUrl, addApiMethod)
    UseAddApiName(''); UseAddApiUrl(''); UseAddApiMethod('')
  }

  const onOk3 = () => {
    AddUserStore.addAuthorityViewAction(selectHasViewAuthority.view_authority_text, selectHasViewAuthority.view_id);
    UseSelectHasViewAuthority({
      view_authority_text: '',
      view_id: ''
    })
  }

  const onOk4 = () => {
    AddUserStore.setIdentityApiAction(selectIdentity1.identity_id, selectIdentity2.api_authority_id)
  }

  const onOk5 = () => {
    AddUserStore.setIdentityViewAction(selectIdentity3.identity_id, selectIdentity4.view_authority_id)
  }

  const handleChange = (val: string, option: any) => {
    let { key, value } = JSON.parse(JSON.stringify(option));
    UseSelectHasViewAuthority({
      view_authority_text: value,
      view_id: key
    })
  }

  const handleChange1 = (val: string, option: any) => {
    let { key, value } = JSON.parse(JSON.stringify(option));
    UseSelectIdentity1({
      identity_id: key,
      identity_text: value
    })
  }

  const handleChange2 = (val: string, option: any) => {
    let { key, value } = JSON.parse(JSON.stringify(option));
    UseSelectIdentity2({
      api_authority_id: key,
      api_authority_text: value
    })
  }

  const handleChange3 = (val: string, option: any) => {
    let { key, value } = JSON.parse(JSON.stringify(option));
    UseSelectIdentity3({
      identity_id: key,
      identity_text: value
    })
  }

  const handleChange4 = (val: string, option: any) => {
    let { key, value } = JSON.parse(JSON.stringify(option));
    console.log(key, value,`${JSON.parse(JSON.stringify(option))}`,'JSON.parse(JSON.stringify(option))')
    UseSelectIdentity4({
      view_authority_id:key
    })
  }

  return useObserver(() => (

    <div className={AddCss.addTeacher}>

      <div className={AddCss.item}>
        {/* <AddList navList={[{ title: "添加用户" }, { title: "修改用户" }]} list={ShowIdentityList1}  /> */}
      </div>

      <div className={AddCss.item}>
        <li>
          <Tag style={{ fontSize: '.07rem', padding: '0.03rem 0.07rem' }}  >
            <span>添加身份 </span>
          </Tag>
        </li>
        <li  > <Input name="addIdentityName" placeholder="请输入身份名称" value={addIdentityName} onChange={(e) => { updateText(e) }} />  </li>
        <li>
          <Button type="primary" size='middle' onClick={() => { onOk1() }}>确定</Button>
          <Button size='middle' style={{ marginLeft: '.1rem' }} onClick={() => { UseAddIdentityName('') }}>重置</Button>
        </li>
        {/* <AddList navList={[{ title: "添加身份" }]} list={addIdentityList} okBtn={(e:any)=>{console.log(e)}} /> */}
      </div>

      <div className={AddCss.item}>
        <li>
          <Tag style={{ fontSize: '.07rem', padding: '0.03rem 0.07rem' }}  >
            <span>添加api接口权限 </span>
          </Tag>
        </li>
        <li> <Input name="addApiName" placeholder="请输入api接口权限名称" value={addApiName} onChange={(e) => { UseAddApiName(e.target.value) }} />  </li>
        <li> <Input name="addApiUrl" placeholder="请输入api接口权限url" value={addApiUrl} onChange={(e) => { UseAddApiUrl(e.target.value) }} />  </li>
        <li> <Input name="addApiMethod" placeholder="请输入api接口权限方法" value={addApiMethod} onChange={(e) => { UseAddApiMethod(e.target.value) }} />  </li>

        <li>
          <Button type="primary" size='middle' onClick={() => { onOk2() }}>确定</Button>
          <Button size='middle' style={{ marginLeft: '.1rem' }} onClick={() => { UseAddApiName(''); UseAddApiUrl(''); UseAddApiMethod('') }}>重置</Button>
        </li>
        {/* <AddList navList={[{ title: "添加api接口权限" }]} list={addApiAuthority} okBtn={(e:any)=>{console.log(e)}}/> */}
      </div>

      <div className={AddCss.item}>
        <li>
          <Tag style={{ fontSize: '.07rem', padding: '0.03rem 0.07rem' }}  >
            <span>添加视图接口权限 </span>
          </Tag>
        </li>
        <li>
          <Select
            style={{ width: 160 }}
            placeholder="添加视图接口权限"
            onChange={handleChange}
            dropdownRender={menu => (
              <div>
                {menu}
                <Divider style={{ margin: '4px 0' }} />
              </div>
            )}
          >
            {
              AddUserStore.ViewAuthorityList && AddUserStore.ViewAuthorityList.map((v: any, index: number) => {
                return <Option key={v.view_authority_id} value={v.view_authority_text}>{v.view_authority_text}</Option>
              })
            }
          </Select>
        </li>
        <li>
          <Button type="primary" size='middle' onClick={() => { onOk3() }}>确定</Button>
          <Button size='middle' style={{ marginLeft: '.1rem' }} onClick={() => {
            UseSelectHasViewAuthority({
              view_authority_text: '',
              view_id: ''
            })
          }}>重置</Button>
        </li>
        {/* <AddList navList={[{ title: "添加视图接口权限" }]} list={ShowIdentityList2} /> */}
      </div>

      <div className={AddCss.item}>
        <li>
          <Tag style={{ fontSize: '.07rem', padding: '0.03rem 0.07rem' }}  >
            <span>给身份设置api接口权限 </span>
          </Tag>
        </li>
        <li>
          <Select
            style={{ width: 160 }}
            placeholder="选择身份id"
            onChange={handleChange1}
            dropdownRender={menu => (
              <div>
                {menu}
                <Divider style={{ margin: '4px 0' }} />
              </div>
            )}
          >
            {
              AddUserStore.IdentityList && AddUserStore.IdentityList.map((v: any, index: number) => {
                return <Option key={v.identity_id} value={v.identity_text}>{v.identity_text}</Option>
              })
            }
          </Select>
        </li>
        <li>
          <Select
            style={{ width: 160 }}
            placeholder="选择api接口权限"
            onChange={handleChange2}
            dropdownRender={menu => (
              <div>
                {menu}
                <Divider style={{ margin: '4px 0' }} />
              </div>
            )}
          >
            {
              AddUserStore.ApiAuthorityList && AddUserStore.ApiAuthorityList.map((v: any, index: number) => {
                return <Option key={v.api_authority_id} value={v.api_authority_text}>{v.api_authority_text}</Option>
              })
            }
          </Select>
        </li>
        <li>
          <Button type="primary" size='middle' onClick={() => { onOk4() }}>确定</Button>
          <Button size='middle' style={{ marginLeft: '.1rem' }} onClick={() => {
            UseSelectHasViewAuthority({
              view_authority_text: '',
              view_id: ''
            })
          }}>重置</Button>
        </li>
        {/* <AddList navList={[{ title: "给身份设置api接口权限" }]} list={ShowIdentityList3} /> */}
      </div>

      <div className={AddCss.item}>
        <li>
          <Tag style={{ fontSize: '.07rem', padding: '0.03rem 0.07rem' }}  >
            <span>给身份设置api接口权限 </span>
          </Tag>
        </li>
        <li>
          <Select
            style={{ width: 160 }}
            placeholder="选择身份id"
            onChange={handleChange3}
            dropdownRender={menu => (
              <div>
                {menu}
                <Divider style={{ margin: '4px 0' }} />
              </div>
            )}
          >
            {
              AddUserStore.IdentityList && AddUserStore.IdentityList.map((v: any, index: number) => {
                return <Option key={v.identity_id} value={v.identity_text}>{v.identity_text}</Option>
              })
            }
          </Select>
        </li>
        <li>
          <Select
            style={{ width: 160 }}
            placeholder="请给身份设置视图权限"
            onChange={handleChange4}
            dropdownRender={menu => (
              <div>
                {menu}
                <Divider style={{ margin: '4px 0' }} />
              </div>
            )}
          >
            {
              AddUserStore.ViewAuthorityList && AddUserStore.ViewAuthorityList.map((v: any, index: number) => {
                return <Option key={v.view_authority_id} value={v.view_authority_text}>{v.view_authority_text}</Option>
              })
            }
          </Select>
        </li>
        <li>
          <Button type="primary" size='middle' onClick={() => { onOk5() }}>确定</Button>
          <Button size='middle' style={{ marginLeft: '.1rem' }} onClick={() => {
            UseSelectHasViewAuthority({
              view_authority_text: '',
              view_id: ''
            })
          }}>重置</Button>
        </li>
        {/* <AddList navList={[{ title: "给身份设置视图权限" }]} list={ShowIdentityList4} /> */}
      </div>

    </div>)
  )
}

export default AddTeacher



  // // 添加身份
  // const addIdentityList = [
  //   {
  //     list: [
  //       { type: '1', placeholder: "请输入身份名称", name: "addIdentityName" }
  //     ]
  //   }
  // ]

  // //添加api接口
  // const addApiAuthority = [
  //   {
  //     list: [
  //       { type: '1', placeholder: "请输入api接口权限名称", name: "addApiName" },
  //       { type: '1', placeholder: "请输入api接口权限url", name: "addApiUrl" },
  //       { type: '1', placeholder: "请输入api接口权限方法", name: "addApiMethod" }
  //     ]
  //   }
  // ]

  // const ShowIdentityList1 = [
  //   {
  //     list: [
  //       { type: '1', placeholder: "请输入用户名", name: "addUserInput" },
  //       { type: '1', placeholder: "请输入密码", name: "addUserPwdInput" },
  //       { type: '2', placeholder: "请选择身份id", name: 'selectIdentity1', list: Array.from(AddUserStore.IdentityList.map((item: any) => { return { id: item.user_id, text: item.identity_text, name: item.user_name, pwd: item.user_pwd } })) }
  //     ]
  //   },
  //   {
  //     list: [
  //       { type: '2', placeholder: "请选择身份id", name: 'selectIdentity0', list: Array.from(AddUserStore.UserList.map((item: any) => { return { id: item.identity_id, text: item.identity_text } })) },
  //       { type: '1', placeholder: "请输入用户名", name: "upDateUserInput" },
  //       { type: '1', placeholder: "请输入密码", name: "upDateUserPwdInput" },
  //       { type: '2', placeholder: "请选择身份id", name: 'selectIdentity0', list: Array.from(AddUserStore.IdentityList.map((item: any) => { return { id: item.identity_id, text: item.identity_text } })) }
  //     ]
  //   }
  // ]

  // const ShowIdentityList2 = [
  //   {
  //     list: [
  //       { type: '2', placeholder: "选择已有的试图", name: "selectHasViewAuthority", list: Array.from(AddUserStore.ViewAuthorityList.map((item: any) => { return { id: item.view_authority_id, text: item.view_authority_text, view_id: item.view_id } })) }
  //     ]
  //   }
  // ]

  // const ShowIdentityList3 = [
  //   {
  //     list: [
  //       { type: '2', placeholder: "请选择身份id", name: 'selectIdentity3', list: Array.from(AddUserStore.IdentityList.map((item: any) => { return { id: item.identity_id, text: item.identity_text } })) },
  //       { type: '2', placeholder: "请选择api接口权限", name: "selectAuthorityRelation", list: Array.from(AddUserStore.AuthorityRelationList.map((item: any) => { return { id: item.identity_api_authority_relation_id, text: item.api_authority_text, url: item.api_authority_url, id_text: item.identity_text, method: item.api_authority_method, view_id: item.view_id } })) }
  //     ]
  //   }
  // ]

  // const ShowIdentityList4 = [
  //   {
  //     list: [
  //       { type: '2', placeholder: "请选择身份id", name: 'selectIdentity4', list: Array.from(AddUserStore.IdentityList.map((item: any) => { return { id: item.identity_id, text: item.identity_text } })) },
  //       { type: '2', placeholder: "请选择视图权限id", name: "selectViewAuthorityID", list: Array.from(AddUserStore.ViewAuthorityList.map((item: any) => { return { id: item.view_authority_id, text: item.view_authority_text, view_id: item.view_id } })) }
  //     ]
  //   }
  // ]