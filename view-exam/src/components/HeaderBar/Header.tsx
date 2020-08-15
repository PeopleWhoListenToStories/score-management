import React from 'react'
import { Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom'
import './header.scss'
import { stat } from 'fs';

export default function Header() {
  const history = useHistory()
  function onClick(e: any) {
    if (e.key == '4')//退出
    {
      window.sessionStorage.removeItem('token');
      history.push('/Login')
    }
  };
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1">个人中心</Menu.Item>
      <Menu.Item key="2">我的班级</Menu.Item>
      <Menu.Item key="3">设置</Menu.Item>
      <Menu.Item key="4">退出登录</Menu.Item>
    </Menu>
  );
  return (
    <div className='headerbox'>
      <p>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" />
      </p>
      <p>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            三组的猪猪们<DownOutlined />
          </a>
        </Dropdown>
      </p>
    </div>
  )
}
