import React from 'react';
import styled from 'styled-components'
import { Layout } from 'antd';
import MenuSider from '../../components/MenuSider'
import Roterview from '../../router/RouterView'

import {useObserver} from 'mobx-react-lite'
const { Header, Sider, Content } = Layout;

export default function Main(props:any) {
  return useObserver(()=><div className="Main"  >
    <Layout>
      <Header style={{ background: '#fff' }}>Header</Header>
      <Layout>
        <Sider ><MenuSider></MenuSider></Sider>
        <Content><Roterview routes={props.routes}/></Content>
      </Layout>
    </Layout>
  </div>)
}

const MainWrapper = styled.div` 
  width: 100%;
  height: 100%;
`