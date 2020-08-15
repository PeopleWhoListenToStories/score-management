import React from 'react';
import { useObserver } from 'mobx-react-lite'
import styled from 'styled-components';
import MenuSider from '../../components/MenuSide/MenuSider';
<<<<<<< HEAD
import HeaderBar from '../../components/HeaderBar/Header'
=======
import Roterview from '../../router/RouterView'
>>>>>>> suleiya
import useStore from '../../context/useStore';
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;

export default function Main(props: any) {
  const { MainStore } = useStore();
  MainStore.initAction();
  console.log(MainStore.MenuList)
  return useObserver(() => <div className="Main"  >
    <Layout>
      <Header style={{ background: '#fff' }}>
        <HeaderBar />
      </Header>
      <Layout>
        <Sider style={{ background: '#232A41' }} ><MenuSider></MenuSider></Sider>
<<<<<<< HEAD
        <Content>Content</Content>
=======
        <Sider ><MenuSider></MenuSider></Sider>
        <Content><Roterview routes={props.routes} /></Content>
>>>>>>> suleiya
      </Layout>
    </Layout>
  </div>)
}

const MainWrapper = styled.div` 
  width: 100%;
  height: 100%;
`