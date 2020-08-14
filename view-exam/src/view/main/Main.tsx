import React from 'react';
import styled from 'styled-components';
import MenuSider from '../../components/MenuSide/MenuSider';
import useStore from '../../context/useStore';
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;

export default function Main() {
  const { MainStore } = useStore();
  MainStore.initAction()
  console.log(MainStore.MenuList)
  return <div className="Main"  >
    <Layout>
      <Header style={{ background: '#fff' }}>Header</Header>
      <Layout>
        <Sider style={{ background: '#232A41' }} ><MenuSider></MenuSider></Sider>
        <Sider ><MenuSider></MenuSider></Sider>
        <Content>Content</Content>
      </Layout>
    </Layout>
  </div>
}

const MainWrapper = styled.div` 
  width: 100%;
  height: 100%;
`