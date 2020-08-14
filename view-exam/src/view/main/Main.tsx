import React from 'react';
import styled from 'styled-components'
import { Layout } from 'antd';
import RouterViews from '../../router/RouterView'

const { Header, Sider, Content } = Layout;

export default function Main(props:any) {
  console.log('---------',props.routes)
  return <div className="Main"  >
    <Layout>
      <Header style={{ background: '#fff' }}>Header</Header>
      <Layout>
        <Sider >Sider</Sider>
        <Content>
          <RouterViews routes={props.routes}  />
        </Content>
      </Layout>
    </Layout>
  </div>
}

// const MainWrapper = styled.div` 
//   width: 100%;
//   height: 100%;
// `