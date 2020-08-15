import React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import MenuSideCss from './MenuSide.module.scss'
import { NavLink } from "react-router-dom";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons'
const { SubMenu } = Menu;

export default function MenuSider() {
  return (
    <Menu
      theme='dark'
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0 }}
    >
      <SubMenu key="sub1" icon={<UserOutlined />} title='试题管理'>
        <Menu.Item key="1">option1</Menu.Item>
        <Menu.Item key="2">option2</Menu.Item>
        <Menu.Item key="3">option3</Menu.Item>
        <Menu.Item key="4">option4</Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<LaptopOutlined />} title='用户管理'>
        <Menu.Item key="5">option5</Menu.Item>
        <Menu.Item key="6">option6</Menu.Item>
        <Menu.Item key="7">option7</Menu.Item>
        <Menu.Item key="8">option8</Menu.Item>
      </SubMenu>
      <SubMenu key="sub3" icon={<NotificationOutlined />} title='考试管理'>
        <Menu.Item key="9">option9</Menu.Item>
        <Menu.Item key="10">option10</Menu.Item>
        <Menu.Item key="11">option11</Menu.Item>
        <Menu.Item key="12">option12</Menu.Item>
      </SubMenu>
      <SubMenu key="sub4" icon={<NotificationOutlined />} title='班级管理'>
        <Menu.Item key="13">option13</Menu.Item>
      </SubMenu>
      <SubMenu key="sub5" icon={<NotificationOutlined />} title='阅卷管理'>
        <Menu.Item key="14">option14</Menu.Item>

      </SubMenu>
    </Menu>
  )
}