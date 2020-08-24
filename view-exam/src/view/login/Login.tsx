import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useObserver } from 'mobx-react-lite'
import LoginCss from './Login.module.scss';
import useStore from '../../context/useStore';
import { setCookie, getCookie, removeCookie } from "../../utils/myCookie"
//视频插件
// import { Player } from 'video-react';
import ParticlesBg from 'particles-bg'
// 引入antd
import { Form, Input, Button, Checkbox, Tag } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export default function Login(props: any) {
  const [username, UseUsername] = useState<string>(getCookie('username') as string);
  const [password, UsePassword] = useState<string>(getCookie('password') as string);
  const [remember, UseRemember] = useState<string>(getCookie('remember') as string);

  const { LoginStore, MainStore } = useStore();
  const history = useHistory();

  useEffect(() => {
    LoginStore.initRandomCode(); //获取验证码
  }, [LoginStore])

  useEffect(() => {

  }, [LoginStore.isRemember])

  async function onFinish(values: any) {
    console.log('Received values of form: ', values);
    if (values.randomNum === LoginStore.RandomCode) {
      const result: any = await LoginStore.loginAction(values.username, values.password);
      if (result.code === 1) {
        MainStore.isGetInitFlag = true;
        if (values.remember) {
          setCookie('username', values.username);
          setCookie('password', values.password);
          setCookie('remember', values.remember);
        } else {
          removeCookie('username');
          removeCookie('password');
          removeCookie('remember');
        }
        history.replace('/main');
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

  // 修改密码触发事件
  function changePwd(event: boolean) {
    LoginStore.changePwd(event)
    if (!event) {
      UseUsername('');
      UsePassword('');
      UseRemember('');
    } else {
      UseUsername(getCookie('username') as string);
      UsePassword(getCookie('password') as string);
      UseRemember(`${event}`);
    }
  }

  return useObserver(() => <div className={LoginCss.Login}>
    <ParticlesBg color="skyblue" num={900} type="lines" bg={true} />
    
    <div className={LoginCss.innerBox}>
      <Form
        name="validate_other"
        className="login-form"
        initialValues={{ remember: remember ? true : false, username: username, password: password }}
        onFinish={onFinish}
      >

        <Form.Item
          name="username"
          validateTrigger="onBlur"
          rules={[{ pattern: /^[a-z]{4,16}$/, message: '请输入您的用户名!', required: true }]}
        >
          <Input value="123" prefix={<UserOutlined className="site-form-item-icon" />} name="username" placeholder="Username" onChange={(e) => { UseUsername(e.target.value) }} />
        </Form.Item>
        <Form.Item
          name="password"
          validateTrigger="onBlur"
          rules={[{
            pattern: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[#@*!&.]).*$/
            , message: '请输入您的密码!', required: true
          }]}
        >
          <Input.Password
            value={password}
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => { UsePassword(e.target.value) }}
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
            <Checkbox onChange={(e) => { changePwd(e.target.checked) }}>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
        </Button> Or <span  >去注册</span>
        </Form.Item>
      </Form>

    </div>
  </div >)
}