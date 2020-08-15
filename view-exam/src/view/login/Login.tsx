import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from "../../components/HeaderBar/Header"
import LoginCss from './Login.module.scss';
import useStore from '../../context/useStore'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


export default function Login() {
  const { Login, MainStore } = useStore();
  const history = useHistory();
  async function onFinish(values: any) {
    const result: any = await Login.loginAction('chenmanjie', 'Chenmanjie123!');
    if (result.code === 1) {
      history.push('/main');
      MainStore.initAction();
    }
    console.log('Received values of form: ', values);
  };

  return <div className={LoginCss.Login}>
    <Header />
    <div className={LoginCss.innerBox}>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} value="chenmanjie" placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            value="Chenmanjie123!"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
        </Button>
        Or <a   >register now!</a>
        </Form.Item>
      </Form>
    </div>
  </div>

}