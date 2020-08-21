import React, { useEffect } from 'react'
import { useObserver } from 'mobx-react-lite';
import AddCss from "./addTeacher.module.css";
import { Button, Input, Select, Divider, Tabs, Form } from 'antd'

import userStore from '../../../context/useStore'

const { Option } = Select;
const { TabPane } = Tabs;
// const { useForm } = Form;

const AddTeacher: React.FC = () => {

  const { AddUserStore } = userStore();

  const avatar = ' '; //更改的用户头像
  const [formRefOne] = Form.useForm();
  const [formRefOnes] = Form.useForm();
  const [formRefTwo] = Form.useForm();
  const [formRefThree] = Form.useForm();
  const [formRefFour] = Form.useForm();
  const [formRefFive] = Form.useForm();
  const [formRefSix] = Form.useForm();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  useEffect(() => {
    AddUserStore.showApiAuthorityAction();
    AddUserStore.showUserAction();
    AddUserStore.showIdentityAction();
    AddUserStore.showViewAuthorityAction();


  })

  function callback(key: any) {
    console.log(key);
  }

  return useObserver(() => (

    <div className={AddCss.addTeacher}>
      <div className={AddCss.innerBox}>

        <div className={AddCss.item}>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="添加用户" key="1">
              <Form {...layout} name="nest-messages1" onFinish={(values: any) => { AddUserStore.addUserAction(values.user_name, values.user_pwd, values.identity_id); formRefOne.resetFields() }} initialValues={{ identity_text: '' }} form={formRefOne}>
                <Form.Item name="user_name" validateTrigger="onBlur" rules={
                  [{ required: true, pattern: /^[a-z]{4,16}$/, message: '输入4-16位小写字母' }]
                }>
                  <Input placeholder="输入用户名" />


                </Form.Item>
                <Form.Item name="user_pwd" validateTrigger="onBlur"
                  rules={[{
                    pattern: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[#@*!&.]).*$/
                    , message: '密码应有符号大小写字母数字各一个!', required: true
                  }]}>
                  <Input placeholder="输入密码" />
                </Form.Item>
                <Form.Item name="identity_id" rules={
                  [{ required: true }]} >
                  <Select
                    style={{ width: 160 }}
                    placeholder="选择身份id"
                    dropdownRender={menu => (
                      <div>
                        {menu}
                        <Divider style={{ margin: '4px 0' }} />
                      </div>
                    )}
                  >
                    {
                      AddUserStore.IdentityList && AddUserStore.IdentityList.map((v: any) => {
                        return <Option key={v.identity_id} value={v.identity_id}>{v.identity_text}</Option>
                      })
                    }
                  </Select>
                </Form.Item>

                <Form.Item >
                  <Button type="primary" htmlType="submit" style={{ width: 100, backgroundImage: `linear-gradient(90deg, #0C41FD, #6B8CFE)` }}>   确定 </Button>
                  <Button size='middle' style={{ marginLeft: '.1rem' }} onClick={() => { formRefOne.resetFields() }}> 重置 </Button>
                </Form.Item>
              </Form>
            </TabPane>
            <TabPane tab="更新用户" key="2">
              <Form {...layout} name="nest-messages2" onFinish={(values: any) => { AddUserStore.renewalUserAction(values.user_id, values.user_name, values.user_pwd, values.identity_id, avatar); formRefOnes.resetFields() }} initialValues={{ identity_text: '' }} form={formRefOnes}>
                <Form.Item name="user_id" rules={[{ required: true }]}>
                  <Select
                    style={{ width: 160 }}
                    placeholder="选择用户id"
                    dropdownRender={menu => (
                      <div>
                        {menu}
                        <Divider style={{ margin: '4px 0' }} />
                      </div>
                    )}
                  >
                    {
                      AddUserStore.UserList && AddUserStore.UserList.map((v: any, index: number) => {
                        return <Option key={v.user_id} value={v.user_id}>{v.user_name}</Option>
                      })
                    }
                  </Select>
                </Form.Item>
                <Form.Item name="user_name" validateTrigger="onBlur" rules={[{ required: true, pattern: /^[a-z]{4,16}$/, message: '用户名只能写小写字母4-16位' }]}>
                  <Input placeholder="输入用户名" />
                </Form.Item>
                <Form.Item name="user_pwd" rules={[{ required: true, pattern: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[#@*!&.]).*$/, message: '密码应有符号大小写字母数字各一个' }]}>
                  <Input placeholder="输入密码" />
                </Form.Item>
                <Form.Item name="identity_id" rules={[{ required: true }]}>
                  <Select
                    style={{ width: 160 }}
                    placeholder="选择身份id"
                    dropdownRender={menu => (
                      <div>
                        {menu}
                        <Divider style={{ margin: '4px 0' }} />
                      </div>
                    )}
                  >
                    {
                      AddUserStore.IdentityList && AddUserStore.IdentityList.map((v: any, index: number) => {
                        return <Option key={v.identity_id} value={v.identity_id}>{v.identity_text}</Option>
                      })
                    }
                  </Select>
                </Form.Item>

                <Form.Item >
                  <Button type="primary" htmlType="submit" style={{ width: 100, backgroundImage: `linear-gradient(90deg, #0C41FD, #6B8CFE)` }}>   确定 </Button>
                  <Button size='middle' style={{ marginLeft: '.1rem' }} onClick={() => { formRefOnes.resetFields() }}> 重置 </Button>
                </Form.Item>

              </Form>
            </TabPane>
          </Tabs>
          {/* <AddList navList={[{ title: "添加用户" }, { title: "修改用户" }]} list={ShowIdentityList1}  /> */}
        </div>

        <div className={AddCss.item}>
          <Tabs defaultActiveKey="1"  >
            <TabPane tab="添加身份" key="1">
              <Form {...layout} name="nest-messages3" onFinish={(values: any) => { AddUserStore.addIdentityAction(values.identity_text); formRefTwo.resetFields() }} initialValues={{ identity_text: '' }} form={formRefTwo}>
                <Form.Item name="identity_text" validateTrigger="onBlur" rules={[{ required: true, pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/, message: '请输入合理的身份' }]}>
                  <Input placeholder="请输入用户名" />
                </Form.Item>
                <Form.Item >
                  <Button type="primary" htmlType="submit" style={{ width: 100, backgroundImage: `linear-gradient(90deg, #0C41FD, #6B8CFE)` }}>   确定 </Button>
                  <Button size='middle' style={{ marginLeft: '.1rem' }} onClick={() => { formRefTwo.resetFields() }}> 重置 </Button>
                </Form.Item>
              </Form>
            </TabPane>
          </Tabs>
          {/* <AddList navList={[{ title: "添加身份" }]} list={addIdentityList} okBtn={(e:any)=>{console.log(e)}} /> */}
        </div>

        <div className={AddCss.item}>
          <Tabs defaultActiveKey="1"  >
            <TabPane tab="添加api接口权限" key="1">
              <Form {...layout} name="nest-messages4" onFinish={(values: any) => { AddUserStore.addAuthorityApiAction(values.identity_text, values.api_authority_url, values.api_authority_method); formRefThree.resetFields() }} initialValues={{ identity_text: '' }} form={formRefThree}>
                <Form.Item name="identity_text" validateTrigger="onBlur" rules={[{ required: true, pattern: /^[\u4e00-\u9fa5]{1,99}$/, message: '请输入汉字' }]}>
                  <Input placeholder="输入api接口权限名称" />
                </Form.Item>
                <Form.Item name="api_authority_url" validateTrigger="onBlur" rules={[{ required: true, pattern: /^[a-zA-Z_\\]+$/, message: '请输入正确url' }]}>
                  <Input placeholder="输入api接口权限url" />
                </Form.Item>
                <Form.Item name="api_authority_method" validateTrigger="onBlur" rules={[{ required: true, pattern: /^[A-Z]+$/, message: '输入api接口 (大写)' }]}>
                  <Input placeholder="输入api接口权限方法" />
                </Form.Item>
                <Form.Item >
                  <Button type="primary" htmlType="submit" style={{ width: 100, backgroundImage: `linear-gradient(90deg, #0C41FD, #6B8CFE)` }}>   确定 </Button>
                  <Button size='middle' style={{ marginLeft: '.1rem' }} onClick={() => { formRefThree.resetFields() }}> 重置 </Button>
                </Form.Item>
              </Form>
            </TabPane>
          </Tabs>
          {/* <AddList navList={[{ title: "添加api接口权限" }]} list={addApiAuthority} okBtn={(e:any)=>{console.log(e)}}/> */}
        </div>

        <div className={AddCss.item}>
          <Tabs defaultActiveKey="1"  >
            <TabPane tab="添加视图接口权限" key="1">
              <Form {...layout} name="nest-messages5" onFinish={(values: any) => { AddUserStore.addAuthorityViewAction(AddUserStore.ViewAuthorityList[values.gender].view_authority_text, AddUserStore.ViewAuthorityList[values.gender].view_id); formRefFour.resetFields() }} initialValues={{ addAuthorityView: '' }} form={formRefFour}>
                <Form.Item name="gender" label="" rules={[{ required: true }]}>
                  <Select
                    placeholder="请选择已有视图"
                    allowClear
                  >
                    {AddUserStore.ViewAuthorityList && AddUserStore.ViewAuthorityList.map((v: any, index: number) => {
                      return <Option key={v.view_authority_id} value={index}>{v.view_authority_text}</Option>
                    })}
                  </Select>
                </Form.Item>
                <Form.Item
                >
                  <Button type="primary" htmlType="submit" style={{ width: 100, backgroundImage: `linear-gradient(90deg, #0C41FD, #6B8CFE)` }}>   确定 </Button>
                  <Button size='middle' style={{ marginLeft: '.1rem' }} onClick={() => { formRefFour.resetFields() }}> 重置 </Button>
                </Form.Item>
              </Form>
            </TabPane>
          </Tabs>
          {/* <AddList navList={[{ title: "添加视图接口权限" }]} list={ShowIdentityList2} /> */}
        </div>

        <div className={AddCss.item}>
          <Tabs defaultActiveKey="1"  >
            <TabPane tab="给身份设置api接口权限" key="1">
              <Form name="nest-messages6" {...layout} onFinish={(values: any) => { AddUserStore.setIdentityViewAction(values.user.identity_id, values.user.identity_id.view_authority_id) }} form={formRefFive}>
                <Form.Item name={['user', 'api_authority_id']} rules={[{ required: true }]}>
                  <Select placeholder="选择api接口权限">
                    {
                      AddUserStore.ApiAuthorityList.map((item: any) => {
                        return (
                          <Select.Option value={item.api_authority_text} key={item.api_authority_id} >{item.api_authority_text}</Select.Option>
                        )
                      })
                    }
                  </Select>
                </Form.Item>
                <Form.Item name={['user', 'identity_id']} rules={[{ required: true }]}>
                  <Select placeholder="选择身份id">
                    {
                      AddUserStore.IdentityList && AddUserStore.IdentityList.map((v: any, index: number) => {
                        return <Option key={v.identity_id} value={v.identity_text}>{v.identity_text}</Option>
                      })
                    }
                  </Select>
                </Form.Item>
                <Form.Item
                >
                  <Button type="primary" htmlType="submit" style={{ width: 100, backgroundImage: `linear-gradient(90deg, #0C41FD, #6B8CFE)` }}>   确定 </Button>
                  <Button size='middle' style={{ marginLeft: '.1rem' }} onClick={() => { formRefFive.resetFields() }}> 重置 </Button>
                </Form.Item>
              </Form>
            </TabPane>
          </Tabs>
          {/* <AddList navList={[{ title: "给身份设置api接口权限" }]} list={ShowIdentityList3} /> */}
        </div>

        {/* 改写身份权限api */}
        <div className={AddCss.item}>
          <Tabs defaultActiveKey="1"  >
            <TabPane tab="给身份设置视图接口权限" key="1">
              <Form
                name="register"
                onFinish={(values: any) => { AddUserStore.setIdentityApiAction(values.identity_id, values.view_authority_id) }}
                form={formRefSix}
              >
                <Form.Item
                  name="identity_id"
                  rules={[{ required: true }]}
                >
                  <Select allowClear
                    placeholder="选择身份id"
                  >
                    {
                      AddUserStore.IdentityList && AddUserStore.IdentityList.map((v: any) => {
                        return <Option key={v.identity_id} value={v.identity_id}>{v.identity_text}</Option>
                      })
                    }
                  </Select>
                </Form.Item>

                <Form.Item
                  name="view_authority_id"
                  rules={[{ required: true }]}
                >
                  <Select allowClear
                    placeholder="请给身份设置视图权限"
                  >
                    {
                      AddUserStore.ViewAuthorityList && AddUserStore.ViewAuthorityList.map((v: any) => {
                        return <Option key={v.view_authority_id} value={v.view_authority_id}>{v.view_authority_text}</Option>
                      })
                    }
                  </Select>
                </Form.Item>

                <Form.Item>
                  <Button htmlType="submit" style={{ width: 100, backgroundImage: `linear-gradient(90deg, #0C41FD, #6B8CFE)` }}>  确定 </Button>
                  <Button htmlType="button" onClick={() => { formRefSix.resetFields() }} style={{ marginLeft: 20 }}>   重置  </Button>
                </Form.Item>
              </Form>
            </TabPane>
          </Tabs>

          {/* <AddList navList={[{ title: "给身份设置视图权限" }]} list={ShowIdentityList4} /> */}
        </div>

      </div>
    </div>)
  )
}


export default AddTeacher