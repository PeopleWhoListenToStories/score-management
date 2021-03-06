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

import io, { Socket } from 'socket.io-client';

const socket = io('http://10.4.161.18:5000/');


export default function Login(props: any) {
  const [username, UseUsername] = useState<string>(getCookie('username') as string);
  const [password, UsePassword] = useState<string>(getCookie('password') as string);
  const [remember, UseRemember] = useState<string>(getCookie('remember') as string);
  const [off, setOff] = useState<boolean>()

  const { LoginStore, MainStore } = useStore();
  const history = useHistory();
  // let couterRef = useRef<HTMLVideoElement | any>(); 

  useEffect(() => {
    removeCookie('user_id');
    removeCookie('identity_id');
    removeCookie('token');
    LoginStore.initRandomCode(); //获取验证码
    MainStore.user_info = {};
  }, [])

  function loginMessage(user_name: string) {
    socket.emit('loginMessage', { user_name: user_name, time: Date.now() * 1 })
    socket.on('loginServeMessage', (res: boolean) => {
      setOff(res);
    })
    return off;
  }

  function loginServeMessage() {

  }

  // useEffect(() => {
  //   couterRef.current.autoplay = true;
  // }, [])

  async function onFinish(values: any) {
    loginServeMessage()
    console.log('Received values of form: ', values);
    if (values.randomNum === LoginStore.RandomCode) {
      const result: any = await LoginStore.loginAction(values.username, values.password);
      if (result.code === 1) {
        await loginMessage(values.username);
        // if (off) {
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
        // } else {
        //   window.confirm('此用户已经登录了 请您更换账号')
        // }

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


    <div className={LoginCss.videoBox}  >
      {/* <video className={LoginCss.video} muted  ref={couterRef} controls={true} loop={true}  >
        <source src="./login.mp4" type="video/mp4" />
      </video> */}
      <ParticlesBg color="skyblue" num={900} type="lines" bg={true} />
    </div>

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
          rules={[{ pattern: /^[a-z0-9]{4,16}$/, message: '请输入您的用户名!', required: true }]}
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
          <Tag color="#55acee" style={{ marginLeft: 20, fontSize: '19px', padding: '15px 30px', border: 'none', lineHeight: '.5', maxHeight: '32px' }} onClick={() => { changeRandomNum() }}>{LoginStore.RandomCode}</Tag>
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
            <Checkbox style={{ color: "white" }} onChange={(e) => { changePwd(e.target.checked) }}>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }} className="login-form-button">
            登录
        </Button> Or <span  >去注册</span>
        </Form.Item>
      </Form>

    </div>
  </div >)
}