import React, { useState, useEffect } from "react";
import { useObserver } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import useStore from "../../context/useStore"
import MenuSideCss from './MenuSide.module.scss'

import { Menu } from 'antd';

import { IMenuItem } from "../../utils/interface"

import menu from "../../router/menu"

import { FormattedMessage } from 'react-intl'; /* react-intl imports */

const { SubMenu } = Menu;
export default function MenuSider() {
  const [defaultKey, setOpenKey] = useState<string>('0');
  // const [defaultName, setOpenName] = useState<string>('0');

  const { MainStore } = useStore();

  function changeOpenKey(menu: any[]) {
    let index: string = "0";
    menu.forEach((item, i) => {
      item.children.forEach((value: any) => {
        if (value.path === window.location.hash.slice(1) + "") {
          index = i + "";
        }
      })
    })
    console.log(index)
    return index;
  }

  function getMyMenu() {
    return MainStore.ViewAuthority.length ? MainStore.ViewAuthority : menu;
  }
  getMyMenu()

  useEffect(() => {
    setOpenKey(changeOpenKey(menu))
  }, [changeOpenKey(menu)])

  function OpenClickMenu(obj: any) {
    setOpenKey(obj.keyPath[1])
  }

  function OpenChangeMenu(openKeys: any) {
    setOpenKey(openKeys[1] ? openKeys[1] : '0')
  }

  return useObserver(() => (

    <div className={MenuSideCss.box}>
      <Menu
        selectedKeys={[`${window.location.hash.slice(1)}`]}
        // defaultOpenKeys={[changeOpenKey(menu)]}
        openKeys={[defaultKey]}
        onClick={({ item, key, keyPath, domEvent }) => { OpenClickMenu({ item, key, keyPath, domEvent }) }}
        onOpenChange={(openKeys: any) => { OpenChangeMenu(openKeys); }}
        // onOpenChange={(openKeys: string[]) => { OpenChangeMenu() }}
        mode="inline"
        theme="dark"
      >
        {getMyMenu().map((item: any, index: number) => {
          return <SubMenu key={index} title={<FormattedMessage id={item.name} defaultMessage={item.name}></FormattedMessage>} icon={<item.meta.icon />}  >
            {
              item.children && item.children.map((v: any) => {
                if ((v.meta as any).show) {
                  return <Menu.Item key={v.path} onClick={() => { MainStore.TagAction({ path: v.path, name: v.meta.name }) }}>
                    <Link to={v.path} ><FormattedMessage id={(v.meta as any).name} defaultMessage={(v.meta as any).name}></FormattedMessage></Link>
                  </Menu.Item>
                }
              })
            }
          </SubMenu>
        })}
      </Menu>
      {/* <Menu
        selectedKeys={[`${window.location.hash.slice(1)}`]}
        // defaultOpenKeys={[changeOpenKey(menu)]}
        openKeys={[defaultKey]}
        onClick={({ item, key, keyPath, domEvent }) => { OpenClickMenu({ item, key, keyPath, domEvent }) }}
        onOpenChange={(openKeys: any) => { OpenChangeMenu(openKeys); }}
        // onOpenChange={(openKeys: string[]) => { OpenChangeMenu() }}
        mode="inline"
        theme="dark"
      >

        {menu.map((item: any, index: number) => {
          return <SubMenu key={index} title={<FormattedMessage id={item.name} defaultMessage={item.name}></FormattedMessage>} icon={<item.meta.icon />}  >
            {
              item.children && item.children.map((v: any) => {
                if ((v.meta as any).show) {
                  return <Menu.Item key={v.path} onClick={() => { MainStore.TagAction({ path: v.path, name: v.meta.name }) }}>
                    <Link to={v.path} ><FormattedMessage id={(v.meta as any).name} defaultMessage={(v.meta as any).name}></FormattedMessage></Link>
                  </Menu.Item>
                }
              })
            }
          </SubMenu>

        })}
      </Menu> */}
    </div >
  ))
}