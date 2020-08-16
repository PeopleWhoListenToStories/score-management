import React from "react";
import MenuSideCss from './MenuSide.module.scss'
import { NavLink, useHistory } from 'react-router-dom'
import { useObserver } from 'mobx-react-lite'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

const defaultIndex: string = '-1';

export default function MenuSider() {
  return (
    useObserver(() => <Menu
      theme='dark'
      mode="inline"
      defaultSelectedKeys={['0']}
      defaultOpenKeys={['/main' + defaultIndex]}
      style={{ height: '100%', borderRight: 0 }}
    >
      <SubMenu key="sub1" icon={<MailOutlined />} title="试题管理">
        <Menu.Item key="1">
          <NavLink to='/main/addQuestion'>添加试题</NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to='/main/questionType'>试题分类</NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to='/main/viewQuestionPage'>查看试题</NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<AppstoreOutlined />} title="用户管理">
        <Menu.Item key="4">
          <NavLink to='/main/addTeacher'>添加用户</NavLink>
        </Menu.Item>
        <Menu.Item key="5">
          <NavLink to='/main/viewTeacher'>用户展示</NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub3" icon={<AppstoreOutlined />} title="考试管理">
        <Menu.Item key="6">
          <NavLink to='/main/addexam'>添加考试</NavLink>
        </Menu.Item>
        <Menu.Item key="7">
          <NavLink to='/main/userList'>试卷列表</NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub4" icon={<AppstoreOutlined />} title="班级管理">
        <Menu.Item key="9">
          <NavLink to='/main/grade'>班级管理</NavLink>
        </Menu.Item>
        <Menu.Item key="10">
          <NavLink to='/main/room'>教室管理</NavLink>
        </Menu.Item>
        <Menu.Item key="11">
          <NavLink to='/main/student'>学生管理</NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub5" icon={<AppstoreOutlined />} title="阅卷管理">
        <Menu.Item key="12">
          <NavLink to='/main/examPaper'>待批班级</NavLink>
        </Menu.Item>
      </SubMenu>
    </Menu>)
  )
}