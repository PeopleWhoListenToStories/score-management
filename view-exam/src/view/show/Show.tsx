import React, { useState, useEffect } from 'react';
import styles from './show.module.scss'
import { useObserver } from "mobx-react-lite"
import { useHistory } from "react-router-dom"
import { Input, Form, Button, Avatar, Upload, Select, Modal, message } from 'antd';
import useStore from '../../context/useStore'
import { UploadOutlined } from '@ant-design/icons';
const { confirm } = Modal;

const ShowApp: React.FC = () => {

  const { MainStore } = useStore();
  const [avater, setAvatar] = useState();
  console.log(MainStore.user_info)

  useEffect(() => {
    MainStore.getUserInfoAction();
    setAvatar(MainStore.user_info.avatar)
  }, [])

  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 8,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 4,
      span: 8,
    },
  };
  const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  };

  function onFinish(values: any) {
    MainStore.user_info.avatar = avater;

    MainStore.user_info.user_name = values.username;
    window.history.back()
  };

  function onFinishFailed(errorInfo: any) {
    console.log('Failed:', errorInfo);
  };

  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }
  async function changeAvatar(e: any) {
    if (e.file.status === 'done') {
      let data = e.file.response.data;
      let index = data.findIndex((item: any) => item.name === 'avatar');
      setAvatar(data[index].path);
    }
  }


  return useObserver(() => <div className={styles.SetUp}>
    <div className={styles.wrap}>
      <Form
        className={styles.form}
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Upload {...props} className={styles.uploads}
          name="avatar"
          action="//123.206.55.50:11000/upload"
          showUploadList={false}
          onChange={changeAvatar}
        >
          <Avatar size={250}
            // src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598529213786&di=52d567b739f6f63a36e7af52970c27e4&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201705%2F08%2F20170508214952_M5nhS.jpeg"
            src={avater}
          />
        </Upload>

        <Form.Item
          label="用户名"
          name="username"
          rules={[
            {
              required: true,
              message: '请宁输入用户名!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="身份"
        >
          <Select defaultValue={MainStore.user_info.identity_text} style={{ width: 120 }} onChange={handleChange} disabled></Select>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            提交
            </Button>
        </Form.Item>
      </Form>
    </div>
  </div >)
}
export default ShowApp;

