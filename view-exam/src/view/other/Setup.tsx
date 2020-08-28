import React, { useState, useEffect } from 'react';
import styles from './SetUp.module.css'
import { useObserver } from "mobx-react-lite"
import { useHistory } from "react-router-dom"
import { Input, Form, Button, Avatar, Upload, Select, Modal } from 'antd';
import useStore from '../../context/useStore'
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;

const SetUpApp: React.FC = () => {
  const { MainStore, AddUserStore } = useStore();
  const history = useHistory();
  const [avatar, setAvatar] = useState<string>(MainStore.user_info.avatar);
  const [historyOff, setHistoryOff] = useState<boolean>(true);
  const [form] = Form.useForm();

  useEffect(() => {
    MainStore.initAction();
    setAvatar(MainStore.user_info.avatar)
  }, [])

  useEffect(() => {
    AddUserStore.showIdentityAction();
  }, [])

  window.addEventListener('popstate', (e: any) => {
    // history.replace('/')
    let r: any = window.confirm("您还没有保存 确认要退出吗?");
    if (r) {
      history.go(-1)
    } else {
      history.go(0)
    }
  })


  history.listen((location, action) => {
    // console.log(avatar, MainStore.user_info.avatar)
    // if (history.action === 'POP') {
    //   if (avatar !== MainStore.user_info.avatar) {
    //     let r: any = window.confirm("您还没有保存 确认要退出吗?");
    //   }
    // }

    // if (avatar !== MainStore.user_info.avatar) {
    // if (history.action === 'POP') {
    //   history.replace('/setup')
    //   confirm({
    //     title: 'you change info save?',
    //     icon: <ExclamationCircleOutlined />,
    //     content: 'Some descriptions',
    //     onOk: () => {
    //       history.replace('/')
    //     },
    //     onCancel: () => {
    //       history.replace('/')
    //     },
    //   });
    // }
    // }

  })

  async function changeAvatar(e: any) {
    if (e.file.status === 'done') {
      let data = e.file.response.data;
      let index = data.findIndex((item: any) => item.name === 'avatar');
      setAvatar(data[index].path);
    }
  }

  function onFinishFn(values: any) {
    let newAvatar = values.avatar?.file ? values.avatar.file.response.data[0].path : avatar;
    AddUserStore.renewalUserAction((MainStore.user_info as any).user_id, values.user_name, values.user_pwd, values.identity_id, newAvatar);
    MainStore.isGetInitFlag = true;
    MainStore.initAction()
  }

  form.setFieldsValue({ ...MainStore.user_info });

  return useObserver(() => <div className={styles.SetUp}>
    <Form onFinish={(values: any) => { onFinishFn(values) }} form={form}>
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
          {AddUserStore.IdentityList && AddUserStore.IdentityList.map((item) => {
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