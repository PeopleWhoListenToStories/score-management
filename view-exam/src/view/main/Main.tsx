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
<<<<<<< HEAD
import MenuSider from '../../components/MenuSider'
import Headerbox from '../../components/Header'
=======
>>>>>>> b7ace36314e4a2fd46d778a1f8a6fb99185822fd
const { Header, Sider, Content } = Layout;

export default function Main(props: any) {
  const { MainStore } = useStore();
  MainStore.initAction();
  console.log(MainStore.MenuList)
  return useObserver(() => <div className="Main"  >
    <Layout>
      <Header style={{ background: '#fff' }}>
<<<<<<< HEAD
        <Headerbox></Headerbox>
      </Header>
      <Layout>
        <Sider><MenuSider></MenuSider></Sider>
=======
        <HeaderBar />
      </Header>
      <Layout>
        <Sider style={{ background: '#232A41' }} ><MenuSider></MenuSider></Sider>
<<<<<<< HEAD
>>>>>>> b7ace36314e4a2fd46d778a1f8a6fb99185822fd
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