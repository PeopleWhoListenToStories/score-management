import React from "react";
import MenuSideCss from './MenuSide.module.scss'
import { NavLink, useHistory } from 'react-router-dom'
import useStore from '../../context/useStore'
import { useObserver } from 'mobx-react-lite'
import { Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons'
const { SubMenu } = Menu;

const defaultIndex: string = '-1';

const showMenu = (menu: any[]) => {
  return menu.map((item, index) => {
    if (item.meta.show === false) {
      return null;
    }
    if (item.children && item.children.length) {
      return <Menu.SubMenu key={'/main' + index} title={item.meta.title}>
        {showMenu(item.children)}
      </Menu.SubMenu>
    } else {
      // console.log(item.path,"11")
      return <Menu.Item key={item.path}>
        <NavLink to={item.path}>{item.meta.title}</NavLink>
      </Menu.Item>
    }
  })
}

export default function MenuSider() {
  const history = useHistory();
  const { MainStore } = useStore();
  console.log(history.location)
  console.log(history.location.pathname.split('/'))
  return (
    useObserver(() => <Menu
      theme='dark'
      mode="inline"
      defaultSelectedKeys={['0']}
      defaultOpenKeys={['/main' + defaultIndex]}
      style={{ height: '100%', borderRight: 0 }}
    >
      {showMenu(MainStore.ViewAuthority)}
    </Menu>)
  )
}