import React from "react";
import menu from "../../router/menu"
import { Menu } from 'antd';
import MenuSideCss from './MenuSide.module.scss'
import { NavLink, useHistory, Link } from 'react-router-dom'
import useStore from '../../context/useStore'
import { useObserver } from 'mobx-react-lite'
const { SubMenu } = Menu;

console.log(MenuSideCss,'MenuSideCss')
export default function MenuSider() {
  return (
    <div className={MenuSideCss.box}>
      <Menu
        defaultSelectedKeys={['0']}
        defaultOpenKeys={[`${window.location.hash.slice(1)}`]}
        mode="inline"
        theme="dark"
      >
        {menu.map((item, index) => {
          return <SubMenu key={index} title={item.name} >
            {
              item.children && item.children.map((v, i) => {
                if ((v.meta as any).show) {
                  return <Menu.Item key={v.path}>
                    <Link to={v.path} >{(v.meta as any).name}</Link>
                  </Menu.Item>
                }
              })
            }
          </SubMenu>

        })}
      </Menu> </div>
  )
}