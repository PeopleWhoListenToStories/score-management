import React from 'react';
import styled from 'styled-components';
import MenuSider from '../../components/MenuSide/MenuSider';
import HeaderBar from '../../components/HeaderBar/Header'
import useStore from '../../context/useStore';
import { Layout } from 'antd';
<<<<<<< HEAD
import RouterViews from '../../router/RouterView'

const { Header, Sider, Content } = Layout;

export default function Main(props:any) {
  console.log('---------',props.routes)
=======
const { Header, Sider, Content } = Layout;

export default function Main() {
  const { MainStore } = useStore();
  MainStore.initAction()
  console.log(MainStore.MenuList)
>>>>>>> e8058cacbee8a90b2bba7579bd043b6b7cf48911
  return <div className="Main"  >
    <Layout>
      <Header style={{ background: '#fff' }}>
        <HeaderBar />
      </Header>
      <Layout>
<<<<<<< HEAD
        <Sider >Sider</Sider>
        <Content>
          <RouterViews routes={props.routes}  />
        </Content>
=======
        <Sider style={{ background: '#232A41' }} ><MenuSider></MenuSider></Sider>
        <Content>Content</Content>
>>>>>>> e8058cacbee8a90b2bba7579bd043b6b7cf48911
      </Layout>
    </Layout>
  </div>
}

// const MainWrapper = styled.div` 
//   width: 100%;
//   height: 100%;
// `