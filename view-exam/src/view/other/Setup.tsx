import React, { useState, useEffect } from 'react';
import styles from './SetUp.module.css'
import { useObserver } from "mobx-react-lite"
import { Input, Form, Button, Avatar, Upload, Select } from 'antd';
import useStore from '../../context/useStore'

const SetUpApp: React.FC = () => {
  const { MainStore, AddUserStore } = useStore();
  let [avatar, setAvatar] = useState<string>((MainStore.user_info as any).avatar);

  useEffect(() => {
    AddUserStore.showIdentityAction();
  }, [])

  async function changeAvatar(e: any) {
    if (e.file.status === 'done') {
      let data = e.file.response.data;
      let index = data.findIndex((item: any) => item.name === 'avatar');
      setAvatar(data[index].path);
    }
  }
  // user_id: string, user_name?: string, user_pwd?: string, identity_id?: string, avatar?: string
  function onFinishFn(values: any) {
    let newAvatar = values.avatar?.file ? values.avatar.file.response.data[0].path : avatar;
    AddUserStore.renewalUserAction((MainStore.user_info as any).user_id,values.user_name,values.user_pwd,values.identity_id,newAvatar);
    MainStore.initAction()
  }

  return useObserver(() => <div className={styles.SetUp}>

    <Form onFinish={(values: any) => { onFinishFn(values) }}
      initialValues={{
        avatar: avatar,
        user_name: (MainStore.user_info as any).user_name,
        identity_id: (MainStore.user_info as any).identity_id,
        identity_text: (MainStore.user_info as any).identity_text,
      }}>
      <Form.Item name="avatar" label="头　像" style={{ height: '50px', lineHeight: '50px' }}>
        <Upload
          name="avatar"
          action="//123.206.55.50:11000/upload"
          showUploadList={false}
          onChange={changeAvatar}
        >
          <Avatar size={50} src={avatar} />
        </Upload>
      </Form.Item>
      <Form.Item name="user_name" label="用户名" >
        <Input style={{ width: '100%' }} disabled />
      </Form.Item>
      <Form.Item name="identity_id" label="身　份">
        <Select>
          {AddUserStore.IdentityList && AddUserStore.IdentityList.map((item, index) => {
            return <Select.Option key={item.identity_id} value={item.identity_id}>{item.identity_text}</Select.Option>
          })}
        </Select>
      </Form.Item>
      <Form.Item style={{ textAlign: 'center' }} >
        <Button type="primary" htmlType="submit">提交</Button>
        <Button type="dashed" style={{ marginLeft: '10px' }}>取消</Button>
      </Form.Item>
    </Form>
  </div >)
}

export default SetUpApp;