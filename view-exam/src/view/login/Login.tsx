import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useObserver } from 'mobx-react-lite'
import LoginCss from './Login.module.scss';
import useStore from '../../context/useStore';


// 引入antd
import { Form, Input, Button, Checkbox, Tag } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


export default function Login() {
  const { LoginStore, MainStore } = useStore();
  const history = useHistory();

  useEffect(() => {
    LoginStore.initRandomCode(); //获取验证码
  }, [])

  async function onFinish(values: any) {
    console.log('Received values of form: ', values);
    if (values.randomNum === LoginStore.RandomCode) {
      const result: any = await LoginStore.loginAction('chenmanjie', 'Chenmanjie123!');
      if (result.code === 1) {
        history.push('/main');
        MainStore.initAction();
      }
    } else {
      console.log('重新输入验证码');
      LoginStore.initRandomCode(); //重新获取验证码
    }

  };

  // 修改随机数
  function changeRandomNum() {
    LoginStore.initRandomCode(); //获取验证码
  }

  return useObserver(() => <div className={LoginCss.Login}>
    <div className={LoginCss.innerBox}>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: false }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}

        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <div style={{
          position: 'absolute',
          left: '0'
        }}>
          <Tag color="#55acee" style={{ fontSize: '19px', padding: '15px 30px', border: 'none', lineHeight: '.5', maxHeight: '32px' }} onClick={() => { changeRandomNum() }}>{LoginStore.RandomCode}</Tag>
        </div>

        <Form.Item
          name="randomNum"
          rules={[{ required: true, message: 'Please input your RandomNum!' }]}
          style={{ marginBottom: '0px', textAlign: 'right' }}
        >
          <Input
            type="text"
            placeholder="验证码"
            style={{ width: '45%' }}
          />
        </Form.Item>

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
        </Button>
        Or <a   >去注册</a>
        </Form.Item>
      </Form>
    </div>
  </div>)
}