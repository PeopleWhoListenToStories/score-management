import React from "react";
import { useObserver } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import MenuSideCss from './MenuSide.module.scss'

import { Menu } from 'antd';

import { IMenuItem } from "../../utils/interface"
import useStore from '../../context/useStore'

import menu from "../../router/menu"

const { SubMenu } = Menu;

console.log(MenuSideCss, 'MenuSideCss')
function changeOpenKey(menu: IMenuItem[]) {
  let index: string = "0";
  menu.forEach((item, i) => {
    item.children.forEach(value => {
      if (value.path === window.location.hash.slice(1) + "") {
        index = i + "";
      }
    })
  })
  return index;
}
export default function MenuSider() {
  return useObserver(() => (
    <div className={MenuSideCss.box}>
      <Menu
        defaultSelectedKeys={[`${window.location.hash.slice(1)}`]}
        defaultOpenKeys={[changeOpenKey(menu)]}
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
  ))
}