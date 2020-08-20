import React, { useEffect, useState } from 'react'
import { useObserver } from 'mobx-react-lite';
import AddCss from './addTeacher.module.css';

import { Button, Input, Select, Divider, Tag, Tabs } from 'antd'

import AddList from '../../../components/AddList/AddList';
import userStore from '../../../context/useStore'

const { Option } = Select;
const { TabPane } = Tabs;


const AddTeacher: React.FC = () => {
  const [addUserInput, SetAddUserInput] = useState<string>('');
  const [addUserPwdInput, SetAddUserPwdInput] = useState<string>('');
  const [addUserInput1, SetAddUserInput1] = useState<string>('');
  const [addUserPwdInput1, SetAddUserPwdInput1] = useState<string>('');

  const [addIdentityName, UseAddIdentityName] = useState<string>('');
  const [addApiName, UseAddApiName] = useState<string>('');
  const [addApiUrl, UseAddApiUrl] = useState<string>('');
  const [addApiMethod, UseAddApiMethod] = useState<string>('');
  const [selectHasViewAuthority, UseSelectHasViewAuthority] = useState<any>({});
  const [selectHasViewAuthority0, SetSelectHasViewAuthority0] = useState<any>({}); // 更新用户的用户id
  const [selectHasViewAuthority1, SetSelectHasViewAuthority1] = useState<any>({}); // 更新用户的省份id
  const [selectIdentity1, UseSelectIdentity1] = useState<any>({});
  const [selectIdentity2, UseSelectIdentity2] = useState<any>({});
  const [selectIdentity3, UseSelectIdentity3] = useState<any>({});
  const [selectIdentity4, UseSelectIdentity4] = useState<any>({});

  const { AddUserStore } = userStore();

  const avatar = ' '; //更改的用户头像

  // const [showIdentityList, setIdentityList] = useState<any[]>([]);

  let navList: any[] = [
    {
      name: '添加用户',
      id: '0',
      list: [
        { type: '1', placeholder: "请输入用户名", name: "addUserInput" },
        { type: '1', placeholder: "请输入密码", name: "addUserPwdInput" },
        { type: '2', placeholder: "请选择身份id", name: 'selectIdentity1', list: Array.from(AddUserStore.IdentityList.map((item: any) => { return { id: item.user_id, text: item.identity_text, name: item.user_name, pwd: item.user_pwd } })) }
      ]
    },
    {
      name: '添加用户',
      id: '0',
      list: [
        { type: '2', placeholder: "请选择身份id", name: 'selectIdentity0', list: Array.from(AddUserStore.UserList.map((item: any) => { return { id: item.identity_id, text: item.identity_text } })) },
        { type: '1', placeholder: "请输入用户名", name: "upDateUserInput" },
        { type: '1', placeholder: "请输入密码", name: "upDateUserPwdInput" },
        { type: '2', placeholder: "请选择身份id", name: 'selectIdentity0', list: Array.from(AddUserStore.IdentityList.map((item: any) => { return { id: item.identity_id, text: item.identity_text } })) }
      ]
    }
  ]


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

  const onOk0 = () => {
    SetAddUserInput('')
    SetAddUserPwdInput('')
    AddUserStore.addUserAction(addUserInput, addUserPwdInput, selectHasViewAuthority0.identity_id)
  }
  const onOk01 = () => {
    AddUserStore.renewalUserAction(selectHasViewAuthority0.user_id, addUserInput1, addUserPwdInput1, selectHasViewAuthority1.identity_id, avatar)
    SetAddUserInput1('')
    SetAddUserPwdInput1('')
    // AddUserStore.addUserAction(addUserInput1, addUserPwdInput1, selectHasViewAuthority1.identity_id)
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

  const handleChange0 = (val: string, option: any) => {
    let { key, value } = JSON.parse(JSON.stringify(option));
    SetSelectHasViewAuthority0({
      identity_id: key,
      identity_text: value
    })
  }

  const handleChange00 = (val: string, option: any) => {
    let { key, value, user_pwd } = JSON.parse(JSON.stringify(option));
    SetSelectHasViewAuthority0({
      user_id: key
    })
  }

  const handleChange000 = (val: string, option: any) => {
    let { key, value } = JSON.parse(JSON.stringify(option));
    SetSelectHasViewAuthority1({
      identity_id: key,
    })
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
    console.log(key, value, `${JSON.parse(JSON.stringify(option))}`, 'JSON.parse(JSON.stringify(option))')
    UseSelectIdentity4({
      view_authority_id: key
    })
  }

  function callback(key: any) {
    console.log(key);
  }

  return useObserver(() => (

    <div className={AddCss.addTeacher}>

      <div className={AddCss.item}>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="添加用户" key="1">
            <li>
              <Input name="addUserInput" placeholder="请输入身份名称" value={addUserInput} onChange={(e) => { SetAddUserInput(e.target.value) }} />
            </li>
            <li>
              <Input name="addUserPwdInput" placeholder="请输入密码" value={addUserPwdInput} onChange={(e) => { SetAddUserPwdInput(e.target.value) }} />
            </li>
            <li>
              <Select
                style={{ width: 160 }}
                placeholder="选择身份id"
                onChange={handleChange0}
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
              <Button type="primary" size='middle' onClick={() => { onOk0() }}>确定</Button>
              <Button size='middle' style={{ marginLeft: '.1rem' }} onClick={() => { SetAddUserInput(''); SetAddUserPwdInput('') }}>重置</Button>
            </li>
          </TabPane>
          <TabPane tab="更新用户" key="2">
            <Select
              style={{ width: 160 }}
              placeholder="选择用户id"
              onChange={handleChange00}
              dropdownRender={menu => (
                <div>
                  {menu}
                  <Divider style={{ margin: '4px 0' }} />
                </div>
              )}
            >
              {
                AddUserStore.UserList && AddUserStore.UserList.map((v: any, index: number) => {
                  return <Option key={v.user_id} value={v.user_name}>{v.user_name}</Option>
                })
              }
            </Select>
            <li>
              <Input name="addUserInput1" placeholder="请输入用户名" value={addUserInput1} onChange={(e) => { SetAddUserInput1(e.target.value) }} />
            </li>
            <li>
              <Input name="addUserPwdInput1" placeholder="请输入密码" value={addUserPwdInput1} onChange={(e) => { SetAddUserPwdInput1(e.target.value) }} />
            </li>
            <li>
              <Select
                style={{ width: 160 }}
                placeholder="选择身份id"
                onChange={handleChange000}
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
              <Button type="primary" size='middle' onClick={() => { onOk01() }}>确定</Button>
              <Button size='middle' style={{ marginLeft: '.1rem' }} onClick={() => { SetAddUserInput1(''); SetAddUserPwdInput1('') }}>重置</Button>
            </li>
          </TabPane>
        </Tabs>
        {/* <AddList navList={[{ title: "添加用户" }, { title: "修改用户" }]} list={ShowIdentityList1}  /> */}
      </div>

      <div className={AddCss.item}>
        <li>
          <Tag style={{ fontSize: '.07rem', padding: '0.03rem 0.07rem' }}  >
            <span>添加身份 </span>
          </Tag>
        </li>
        <li> <Input name="addIdentityName" placeholder="请输入身份名称" value={addIdentityName} onChange={(e) => { updateText(e) }} />  </li>
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